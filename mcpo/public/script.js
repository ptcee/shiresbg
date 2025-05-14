const leftSide = document.getElementById('left');
const rightSide = document.getElementById('right');
const select = document.getElementById('characterSelect');
const addLeftBtn = document.getElementById('addLeft');
const addRightBtn = document.getElementById('addRight');
const allCharacters = [];

// CHARACTER CARDS //
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

  const label = document.createElement('h3');
  label.textContent = char.label;
  label.style.cursor = 'pointer';
  label.title = 'Click to remove';

  label.onclick = () => {
    if (confirm(`Remove ${char.label}?`)) {
      wrapper.remove();
    }
  };


  // POWER AND HEALTH SHIT //
  let health = char.hp;
  let power = 1;

  const healthBar = createBlockBar("HEALTH", health, 0, 20, "#eb0000", val => health = val);
  const powerBar = createBlockBar("POWER", power, 0, 10, "#00eb3f", val => power = val);

  charDiv.append(label, healthBar.container, powerBar.container);
  allCharacters.push({ powerBar, updatePower: powerBar.update });


  const flipBtn = document.createElement('button');
  flipBtn.textContent = 'flip';
  flipBtn.onclick = () => {
    charDiv.classList.toggle('flipped');
  };

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

  sideBtns.append(healthGroup, powerGroup, flipBtn, objToggleDiv);




  if (side === 'left') {
    sideBtns.classList.add('left-buttons');
    wrapper.append(sideBtns, charDiv);
  } else {
    sideBtns.classList.add('right-buttons');
    wrapper.append(charDiv, sideBtns);
  }

  sideEl.appendChild(wrapper);
}

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



function createBlockBar(label, value, min, max, color, onChange) {
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
  };

  const minus = document.createElement('button');
  minus.textContent = '–';
  minus.onclick = () => {
    if (value > min) update(value - 1);
  };

  const minus3 = document.createElement('button');
  minus3.textContent = '–3';
  minus3.onclick = () => {
    if (value > min) update(Math.max(min, value - 3));
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

  return { container, plus, minus, plus3, minus3, update };
}


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



document.getElementById('powerPhaseBtn').onclick = () => {
  allCharacters.forEach(c => {
    const blocks = c.powerBar.container.querySelectorAll('.block').length;
    if (blocks < 10) {
      c.updatePower(blocks + 1);
    }
  });
};

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

document.getElementById('updateBtn').addEventListener('click', (e) => {
  e.preventDefault();

  socket.emit('updateState', {
    p1: {
      name: document.getElementById('p1name').value,
      affil: document.getElementById('p1affil').options[document.getElementById('p1affil').selectedIndex].text,
      score: parseInt(p1scoreEl.textContent)
    },
    p2: {
      name: document.getElementById('p2name').value,
      affil: document.getElementById('p2affil').options[document.getElementById('p2affil').selectedIndex].text,
      score: parseInt(p2scoreEl.textContent)
    },
    round: parseInt(document.getElementById('round').value),
    extract: document.getElementById('extractselect').value,
    secure: document.getElementById('secureselect').value,
  });
});

document.getElementById('updateBtn').onclick = () => {
  const cleanHTML = (container) => {
    const clone = container.cloneNode(true);
    clone.querySelectorAll('.side-buttons').forEach(btn => btn.remove());
    return clone.innerHTML;
  };

  const state = {
    left: cleanHTML(document.getElementById('left')),
    right: cleanHTML(document.getElementById('right'))
  };

  socket.emit('updateState', state);
};

