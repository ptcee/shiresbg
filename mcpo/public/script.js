const leftSide = document.getElementById('left');
const rightSide = document.getElementById('right');
const select = document.getElementById('characterSelect');
const addLeftBtn = document.getElementById('addLeft');
const addRightBtn = document.getElementById('addRight');
const allCharacters = [];

// CHARACTER CARDS
dataSet.forEach(char => {
  const option = document.createElement('option');
  option.value = char.id;
  option.textContent = char.label;
  option.hp = char.hp;
  select.appendChild(option);
});

addLeftBtn.onclick = () => addCharacter('left');
addRightBtn.onclick = () => addCharacter('right');

function addCharacter(side) {
  const sideEl = side === 'left' ? leftSide : rightSide;
  const currentCount = sideEl.querySelectorAll('.character-wrapper').length;
  if (currentCount >= 7) return alert("sorry, can only fit 7 characters");

  const selectedId = select.value;
  const char = dataSet.find(c => c.id === selectedId);
  if (!char) return;

  const wrapper = document.createElement('div');
  wrapper.className = 'character-wrapper';

  const charDiv = document.createElement('div');
  charDiv.className = 'character';
  charDiv.style.backgroundImage = `url("img/${char.id}.png")`;
  charDiv.style.position = 'relative';
  charDiv.classList.add(side === 'left' ? 'left-char' : 'right-char');

  const label = document.createElement('h3');
  label.textContent = char.label.replace(/,\s*the\b/i, '').trim();
  label.style.cursor = 'pointer';
  label.title = 'Click to remove';

  label.onclick = () => {
    if (confirm(`Remove ${char.label}?`)) {
      wrapper.remove();
    }
  };

  // POWER AND HEALTH SHIT
  let health = char.hp;
  let power = 1;

  const healthBar = createBlockBar("HEALTH", health, 0, 20, "#eb0000", val => health = val, () => powerBar);
  const powerBar = createBlockBar("POWER", power, 0, 10, "#00eb3f", val => power = val);

  // MINUS HP WITHOUT GAINING POWER
  const pureMinus = document.createElement('button');
  pureMinus.textContent = '🩸';
  pureMinus.style.padding = '0';
  pureMinus.style.margin = '0';
  pureMinus.style.backgroundColor = '#e55d5d';
  pureMinus.style.color = 'white';
  pureMinus.title = "Damage without Power";
  pureMinus.onclick = () => {
    if (healthBar.value > 0) {
      healthBar.update(healthBar.value - 1);
    }
  };

  charDiv.append(label, healthBar.container, powerBar.container);
  allCharacters.push({ powerBar, updatePower: powerBar.update, charData: char });

  const flipBtn = document.createElement('button');
  flipBtn.textContent = '⟳';
  flipBtn.style.padding = '0';
  flipBtn.style.margin = '0';
  flipBtn.onclick = () => {
    charDiv.classList.toggle('flipped');
    healthBar.update(char.ihp !== undefined ? char.ihp : char.hp);
  };

  const actBtn = document.createElement('button');
  actBtn.textContent = '✓';
  actBtn.style.backgroundColor = '#0ec478';
  const actMarker = document.createElement('div');
  actMarker.textContent = '✓';
  actMarker.className = 'act-marker';
  actMarker.style.display = 'none';
  charDiv.appendChild(actMarker);

  actBtn.onclick = () => {
    const isNowActive = actMarker.style.display === 'none';
    actMarker.style.display = isNowActive ? 'flex' : 'none';

    if (isNowActive && char.hf) {
      const isFlipped = charDiv.classList.contains('flipped');
      const maxHP = isFlipped && char.ihp !== undefined ? char.ihp : char.hp;
      const healAmount = Math.min(char.hf, maxHP - health);
      if (healAmount > 0) {
        healthBar.update(health + healAmount);
      }
    }
  };

  const utilbtns = document.createElement('div');
  utilbtns.className = 'utilbtns';
  utilbtns.append(flipBtn, actBtn, pureMinus);

  const eBtn = document.createElement('button');
  eBtn.textContent = 'E';
  eBtn.onclick = () => toggleMarker(charDiv, 'E', 'red');

  const sBtn = document.createElement('button');
  sBtn.textContent = 'S';
  sBtn.onclick = () => toggleMarker(charDiv, 'S', 'blue');

  const objToggleDiv = document.createElement('div');
  objToggleDiv.className = 'objtoggle';
  objToggleDiv.append(eBtn, sBtn);

  const sideBtns = document.createElement('div');
  sideBtns.className = 'side-buttons';

  const healthGroup = document.createElement('div');
  healthGroup.className = 'button-group red';
  healthGroup.append(healthBar.minus3, healthBar.minus, healthBar.plus, healthBar.plus3);

  const powerGroup = document.createElement('div');
  powerGroup.className = 'button-group green';
  powerGroup.append(powerBar.minus3, powerBar.minus, powerBar.plus, powerBar.plus3);

  sideBtns.append(healthGroup, powerGroup, utilbtns, objToggleDiv);

  if (side === 'left') {
    sideBtns.classList.add('left-buttons');
    wrapper.append(sideBtns, charDiv);
  } else {
    sideBtns.classList.add('right-buttons');
    wrapper.append(charDiv, sideBtns);
  }

  sideEl.appendChild(wrapper);
}


//MARKER
function toggleMarker(parent, label, color) {
  const existing = parent.querySelector(`.marker.${label}`);
  if (existing) {
    existing.remove();
  } else {
    const marker = document.createElement('div');
    marker.className = `marker ${label}`;
    marker.textContent = label;
    marker.style.position = 'absolute';
    marker.style.bottom = '5px';
    marker.style.right = label === 'E' ? '30px' : '5px';
    marker.style.backgroundColor = color;
    marker.style.color = 'white';
    marker.style.borderRadius = '50%';
    marker.style.width = '20px';
    marker.style.height = '20px';
    marker.style.display = 'flex';
    marker.style.alignItems = 'center';
    marker.style.justifyContent = 'center';
    marker.style.fontSize = '14px';
    marker.style.fontWeight = 'bold';
    marker.style.zIndex = '10';
    parent.style.position = 'relative';
    parent.appendChild(marker);
  }
}

function createBlockBar(label, value, min, max, color, onChange, getPowerBar) {
  const container = document.createElement('div');
  container.className = 'bar-container';

  const title = document.createElement('div');
  title.textContent = `${label} (${value})`;
  title.className = 'bar-label';

  const blocksWrapper = document.createElement('div');
  blocksWrapper.style.display = 'flex';

  const update = (newVal) => {
    value = newVal;
    blocksWrapper.innerHTML = '';

    for (let i = 0; i < value; i++) {
      const block = document.createElement('div');
      block.className = 'block';
      block.style.backgroundColor = color;
      blocksWrapper.appendChild(block);
    }

    title.textContent = `${label} (${value})`;
    onChange(value);

    if (label === "HEALTH") {
      const characterDiv = container.closest('.character');
      if (characterDiv && characterDiv.classList.contains('flipped')) {
        characterDiv.style.filter = value === 0 ? 'grayscale(100%)' : 'none';
      }
    }
  };

  const minus = document.createElement('button');
  minus.textContent = '–';
  minus.onclick = () => {
    if (value > min) {
      const diff = 1;
      update(value - diff);
      if (label === "HEALTH" && getPowerBar) {
        const power = getPowerBar();
        if (power) power.update(Math.min(power.max, power.value + diff));
      }
    }
  };

  const minus3 = document.createElement('button');
  minus3.textContent = '–3';
  minus3.onclick = () => {
    if (value > min) {
      const diff = Math.min(3, value - min);
      update(value - diff);
      if (label === "HEALTH" && getPowerBar) {
        const power = getPowerBar();
        if (power) power.update(Math.min(power.max, power.value + diff));
      }
    }
  };

  const plus = document.createElement('button');
  plus.textContent = '+';
  plus.onclick = () => {
    if (value < max) update(value + 1);
  };

  const plus3 = document.createElement('button');
  plus3.textContent = '+3';
  plus3.onclick = () => {
    if (value < max) update(Math.min(max, value + 3));
  };

  update(value);
  container.append(title, blocksWrapper);

  return { container, plus, minus, plus3, minus3, update, get value() { return value; }, max };
}

// CRISIS DISPLAYS
const extracts = [
  'Alien Ship Crashes In Downtown!',
  'Scientific Samples Found in Discovered Universe',
  'Spider-Infected Invade Manhattan',
  'Struggle For The Cube Continues',
  'Terrigen Canisters Fuel Doomsday Device',
  'Unexpected Guests Crash Royal Wedding',
  'Fear Grips World As “Worthy“ Terrorize Cities',
  'Inhumans Deploy Advanced Weaponry',
  'The Montesi Formula Found',
  'Deadly Legacy Virus Cured?',
  'Mutant Extremists Target U.S. Senators!',
  'Skrulls Infiltrate World Leadership',
];

const secures = [
  'Cosmic Invasion! Black Order Descends on Earth',
  'Deadline to Destruction',
  'Mayor Fisk Vows To Find Missing Witnesses',
  'Deadly Meteors Mutate Civilians',
  'Guardians Save Shi\'ar Empress in Style',
  'Infinity Formula Goes Missing!',
  'Riots Spark Over Extremis 3.0',
  'Mutant Madman Turns City Into Lethal Amusement Park',
  'Intrusions Open Across City As Seals Collapse',
  'M\'Kraan Crystal Gets Heroes Home!',
  'Super-Powered Scoundrels Form Sinister Syndicate',
  'Wedding Party Targeted in Terrible Attack!',
];

function populateSelect(selectId, options) {
  const select = document.getElementById(selectId);
  select.innerHTML = '';

  const defaultOption = document.createElement('option');
  defaultOption.text = 'Select Crisis';
  defaultOption.value = '';
  select.appendChild(defaultOption);

  options.forEach(text => {
    const option = document.createElement('option');
    option.value = text;
    option.text = text;
    select.appendChild(option);
  });
}

populateSelect('extractselect', extracts);
populateSelect('secureselect', secures);


//POWER PHASE BUTTON
document.getElementById('powerPhaseBtn').onclick = () => {
  allCharacters.forEach(c => {
    const currentPower = c.powerBar.container.querySelectorAll('.block').length;
    const increment = c.charData.pp !== undefined ? c.charData.pp : 1;
    const newPower = Math.min(currentPower + increment, 10);
    c.updatePower(newPower);
  });

  const roundSelect = document.getElementById('round');
  let currentIndex = roundSelect.selectedIndex;
  if (currentIndex < roundSelect.options.length - 1) {
    roundSelect.selectedIndex = currentIndex + 1;
  } else {
    roundSelect.selectedIndex = 0;
  }

  document.querySelectorAll('.act-marker').forEach(marker => {
    marker.style.display = 'none';
  });
};


// SCORES
const p1scoreEl = document.getElementById('p1score');
const p2scoreEl = document.getElementById('p2score');

function updateScore(player, delta) {
  const el = player === 'p1' ? p1scoreEl : p2scoreEl;
  const current = parseInt(el.textContent) || 0;
  el.textContent = Math.max(0, current + delta);
}

document.getElementById('p1plus').addEventListener('click', () => updateScore('p1', 1));
document.getElementById('p1minus').addEventListener('click', () => updateScore('p1', -1));
document.getElementById('p2plus').addEventListener('click', () => updateScore('p2', 1));
document.getElementById('p2minus').addEventListener('click', () => updateScore('p2', -1));

//SWAPPING
document.getElementById('swapSides').addEventListener('click', (e) => {
  e.preventDefault();

  const p1name = document.getElementById('p1name');
  const p2name = document.getElementById('p2name');
  [p1name.value, p2name.value] = [p2name.value, p1name.value];

  const p1affil = document.getElementById('p1affil');
  const p2affil = document.getElementById('p2affil');
  [p1affil.selectedIndex, p2affil.selectedIndex] = [p2affil.selectedIndex, p1affil.selectedIndex];

  const p1score = document.getElementById('p1score');
  const p2score = document.getElementById('p2score');
  [p1score.textContent, p2score.textContent] = [p2score.textContent, p1score.textContent];

  const left = document.getElementById('left');
  const right = document.getElementById('right');

  const leftIds = Array.from(left.querySelectorAll('.character h3')).map(el => el.textContent.trim());
  const rightIds = Array.from(right.querySelectorAll('.character h3')).map(el => el.textContent.trim());

  left.innerHTML = '';
  right.innerHTML = '';
  const getIdByLabel = (label) => {
    const match = dataSet.find(c => c.label === label);
    return match ? match.id : null;
  };

  leftIds.forEach(label => {
    const id = getIdByLabel(label);
    if (id) {
      select.value = id;
      addCharacter('right');
    }
  });

  rightIds.forEach(label => {
    const id = getIdByLabel(label);
    if (id) {
      select.value = id;
      addCharacter('left');
    }
  });
});

//PUSH UPDATE TO DISPLAY AND TO SCORE HTML FILES BABY
document.getElementById('updateBtn').addEventListener('click', (e) => {
  e.preventDefault();

  const cleanHTML = (container) => {
    const clone = container.cloneNode(true);
    clone.querySelectorAll('.side-buttons').forEach(btn => btn.remove());
    return clone.innerHTML;
  };

  const state = {
    p1: {
      name: document.getElementById('p1name').value,
      affil: document.getElementById('p1affil').options[document.getElementById('p1affil').selectedIndex].text,
      score: parseInt(document.getElementById('p1score').textContent)
    },
    p2: {
      name: document.getElementById('p2name').value,
      affil: document.getElementById('p2affil').options[document.getElementById('p2affil').selectedIndex].text,
      score: parseInt(document.getElementById('p2score').textContent)
    },
    round: parseInt(document.getElementById('round').value),
    extract: document.getElementById('extractselect').value,
    secure: document.getElementById('secureselect').value,
    left: cleanHTML(document.getElementById('left')),
    right: cleanHTML(document.getElementById('right'))
  };

  socket.emit('updateState', state);
});

//AUTO UPDATING 
function getCurrentState() {
  const cleanHTML = (container) => {
    const clone = container.cloneNode(true);
    clone.querySelectorAll('.side-buttons').forEach(btn => btn.remove());
    return clone.innerHTML;
  };

  return {
    p1: {
      name: document.getElementById('p1name').value,
      affil: document.getElementById('p1affil').options[document.getElementById('p1affil').selectedIndex].text,
      score: parseInt(document.getElementById('p1score').textContent)
    },
    p2: {
      name: document.getElementById('p2name').value,
      affil: document.getElementById('p2affil').options[document.getElementById('p2affil').selectedIndex].text,
      score: parseInt(document.getElementById('p2score').textContent)
    },
    round: parseInt(document.getElementById('round').value),
    extract: document.getElementById('extractselect').value,
    secure: document.getElementById('secureselect').value,
    left: cleanHTML(document.getElementById('left')),
    right: cleanHTML(document.getElementById('right'))
  };
}

const observer = new MutationObserver(() => {
  socket.emit('updateState', getCurrentState());
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
  attributes: true,
  characterData: true
});

document.querySelectorAll('input, select').forEach(el => {
  el.addEventListener('change', () => {
    socket.emit('updateState', getCurrentState());
  });
  el.addEventListener('input', () => {
    socket.emit('updateState', getCurrentState());
  });
});

let updateTimeout;
function triggerUpdate() {
  clearTimeout(updateTimeout);
  updateTimeout = setTimeout(() => {
    socket.emit('updateState', getCurrentState());
  }, 100);
}