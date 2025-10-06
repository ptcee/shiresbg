$(document).ready(function () {

  function escapeCssIdent(ident) {
    if (window.CSS && CSS.escape) return CSS.escape(ident);
    return ident.replace(/([^\w-])/g, function (m) { return '\\' + m; });
  }

  // fills
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
        if (computed !== color) {
          path.style.fill = color;
        }

        if (getComputedStyle(path).fill !== color) {
          path.style.setProperty('fill', color, 'important');
        }
      } catch (err) {
        try { path.style.fill = color; } catch (e) {}
      }
    });
  }

  // scoreboard

  function loadSavedPoints() {
    const saved = JSON.parse(localStorage.getItem('playerPoints'));
    if (saved) {
      dataSet.forEach(p => {
        if (saved[p.id] !== undefined) p.pts = saved[p.id];
      });
    }
  }

  function savePoints() {
    const points = {};
    dataSet.forEach(p => points[p.id] = p.pts);
    localStorage.setItem('playerPoints', JSON.stringify(points));
  }

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

    savePoints();
    updateScoreboard();
  }

function updateScoreboard() {
    if (!$('#scoreboard').length) {
        $('body').prepend('<div id="scoreboard"></div>');
    }

    // Sort players by pts descending
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




  // dropdown

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

      const currentOwner = localStorage.getItem(zoneId) || 'unclaimed';

      applyFillToZone(zoneId, player.fill);
      localStorage.setItem(zoneId, player.id);

      updatePoints(currentOwner, player.id);

      dropdown.remove();
    });
  });

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.color-dropdown').length) {
      $('.color-dropdown').remove();
    }
  });

  function applySavedColors() {
    $('.zone').each(function () {
      const zoneId = $(this).attr('id');
      const savedPlayerId = localStorage.getItem(zoneId);
      if (savedPlayerId) {
        const player = dataSet.find(p => p.id === savedPlayerId);
        if (player) {
          applyFillToZone(zoneId, player.fill);
        }
      }
    });
  }

  // clear button
  $('#clearStorage').on('click', function () {
    if (!confirm('Clear all saved territory colors and points?')) return;

    $('.zone').each(function () {
      const zoneId = $(this).attr('id');
      localStorage.removeItem(zoneId);

      const unclaimed = dataSet.find(p => p.id === 'unclaimed');
      if (unclaimed) {
        applyFillToZone(zoneId, unclaimed.fill);
      }
    });

    dataSet.forEach(p => (p.pts = '0'));
    savePoints();
    updateScoreboard();
  });

  loadSavedPoints();
  applySavedColors();
  updateScoreboard();

});
