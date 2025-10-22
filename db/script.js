$(document).ready(function () {
  const db = window.firebaseDB;
const { getDatabase, ref, set, onValue, update, get } = window.firebase;


  // Utility: CSS escape
  function escapeCssIdent(ident) {
    if (window.CSS && CSS.escape) return CSS.escape(ident);
    return ident.replace(/([^\w-])/g, function (m) { return '\\' + m; });
  }

  // Apply fill color to a zone
  function applyFillToZone(zoneId, color) {
    const esc = escapeCssIdent(zoneId);
    let paths = document.querySelectorAll(`#${esc} > path`);
    if (!paths.length) {
      paths = document.querySelectorAll(`#${esc} path`);
    }
    paths.forEach(path => {
      try {
        path.setAttribute('fill', color);
        const computed = getComputedStyle(path).fill;
        if (computed !== color) path.style.fill = color;
        if (getComputedStyle(path).fill !== color) path.style.setProperty('fill', color, 'important');
      } catch (err) {
        try { path.style.fill = color; } catch (e) {}
      }
    });
  }

  // Scoreboard management
  function updateScoreboard() {
    if (!$('#scoreboard').length) $('body').prepend('<div id="scoreboard"></div>');

    const sortedPlayers = dataSet
      .filter(p => p.id !== 'unclaimed')
      .sort((a, b) => parseInt(b.pts) - parseInt(a.pts));

    let html = `
      <div style="display:flex; flex-direction:column; margin:10px 0; gap:4px;" class="scores">
        <div style="display:flex; justify-content:space-between; align-items: center; font-weight:bold; padding:4px 8px; border-bottom:1px solid #ccc;">
          <div>Player</div>
          <div>Territories</div>
        </div>
    `;

    sortedPlayers.forEach((p, index) => {
      const isLeader = index === 0 && parseInt(p.pts) > 0;
      html += `
        <div style="display:flex; justify-content:space-between; padding:4px 8px; align-items:center; ${isLeader ? 'background:gold;' : ''}">
          <div style="color:${p.fill}; font-weight:bold;">${p.label}</div>
          <div>${p.pts}</div>
        </div>
      `;
    });

    html += `</div>`;
    $('#scoreboard').html(html);
  }

  // Firebase helpers
  const firebaseDB = db;

  // Save a territory’s owner to Firebase
  function saveTerritory(zoneId, playerId) {
    const zoneRef = ref(firebaseDB, `territories/${zoneId}`);
    set(zoneRef, { owner: playerId });
  }

  // Update player points and save to Firebase
  function updatePoints(oldOwner, newOwner) {
    if (oldOwner === newOwner) return;
    if (oldOwner && oldOwner !== 'unclaimed') {
      const oldPlayer = dataSet.find(p => p.id === oldOwner);
      if (oldPlayer && parseInt(oldPlayer.pts) > 0) {
        oldPlayer.pts = (parseInt(oldPlayer.pts) - 1).toString();
      }
    }
    if (newOwner && newOwner !== 'unclaimed') {
      const newPlayer = dataSet.find(p => p.id === newOwner);
      if (newPlayer) {
        newPlayer.pts = (parseInt(newPlayer.pts) + 1).toString();
      }
    }

    updateScoreboard();

    // Push player points to Firebase
    const pointsObj = {};
    dataSet.forEach(p => pointsObj[p.id] = p.pts);
    update(ref(firebaseDB, 'points'), pointsObj);
  }

  // Listen for real-time territory updates
  function listenForTerritoryChanges() {
    const territoriesRef = ref(firebaseDB, 'territories');
    onValue(territoriesRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) return;
      Object.entries(data).forEach(([zoneId, info]) => {
        const player = dataSet.find(p => p.id === info.owner);
        if (player) applyFillToZone(zoneId, player.fill);
      });
    });
  }

  // Listen for real-time points updates
  function listenForPoints() {
    const pointsRef = ref(firebaseDB, 'points');
    onValue(pointsRef, (snapshot) => {
      const points = snapshot.val();
      if (!points) return;
      dataSet.forEach(p => {
        if (points[p.id] !== undefined) p.pts = points[p.id];
      });
      updateScoreboard();
    });
  }

  // Dropdown menu for selecting owner
  $('#svgmap').on('click', '.zone', function (event) {
    event.stopPropagation();
    const zone = $(this);
    const zoneId = zone.attr('id');

    $('.color-dropdown').remove();

    const dropdown = $('<div class="color-dropdown"></div>').css({
      position: 'absolute',
      left: event.clientX + 'px',
      top: event.clientY + 'px',
      background: '#1a1a1a',
      border: '1px solid #333',
      borderRadius: '6px',
      padding: '6px',
      zIndex: 9999,
    });

    dataSet.forEach(player => {
      const opt = $(`
        <div class="color-option" data-player="${player.id}">
          <span class="swatch" style="display:inline-block;width:12px;height:12px;margin-right:6px;background:${player.fill};border-radius:50%;vertical-align:middle;"></span>
          ${player.label}
        </div>
      `).css({
        color: '#fff',
        padding: '3px 6px',
        cursor: 'pointer',
      }).hover(
        function () { $(this).css('background', '#333'); },
        function () { $(this).css('background', 'none'); }
      );
      dropdown.append(opt);
    });

    $('body').append(dropdown);

    dropdown.on('click', '.color-option', function () {
      const playerId = $(this).data('player');
      const player = dataSet.find(p => p.id === playerId);
      if (!player) return;

      // get current owner from firebase snapshot cache (not localStorage)
      const zoneRef = ref(firebaseDB, `territories/${zoneId}`);
      get(zoneRef).then(snapshot => {
        const currentOwner = snapshot.exists() ? snapshot.val().owner : 'unclaimed';
        saveTerritory(zoneId, player.id);
        updatePoints(currentOwner, player.id);
      });

      dropdown.remove();
    });
  });

  // Close dropdown on outside click
  $(document).on('click', function (e) {
    if (!$(e.target).closest('.color-dropdown').length) {
      $('.color-dropdown').remove();
    }
  });

  // Clear button to reset Firebase data
  $('#clearStorage').on('click', function () {
    if (!confirm('Clear all saved territory colors and points?')) return;
    const unclaimed = dataSet.find(p => p.id === 'unclaimed');
    if (!unclaimed) return;

    const resetData = {};
    $('.zone').each(function () {
      const zoneId = $(this).attr('id');
      resetData[zoneId] = { owner: 'unclaimed' };
      applyFillToZone(zoneId, unclaimed.fill);
    });

    // Reset database
    set(ref(firebaseDB, 'territories'), resetData);
    const zeroPoints = {};
    dataSet.forEach(p => p.pts = '0');
    dataSet.forEach(p => zeroPoints[p.id] = '0');
    set(ref(firebaseDB, 'points'), zeroPoints);

    updateScoreboard();
  });

  // Start listeners
  listenForTerritoryChanges();
  listenForPoints();
  updateScoreboard();
});
