const leftSide = document.getElementById('left');
const rightSide = document.getElementById('right');
const select = document.getElementById('characterSelect');
const addLeftBtn = document.getElementById('addLeft');
const addRightBtn = document.getElementById('addRight');
const allCharacters = [];

// DROPDOWN
dataSet.forEach(char => {
  const option = document.createElement('option');
  option.value = char.id;
  option.textContent = char.label;
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

  const label = document.createElement('h3');
  label.textContent = char.label;
  label.style.cursor = 'pointer';
  label.title = 'Click to remove';

  label.onclick = () => {
    if (confirm(`Remove ${char.label}?`)) {
      wrapper.remove();
      syncToLocalStorage();
    };
  }

    let health = 5;
    let power = 1;

    const healthBar = createBlockBar("HEALTH", health, 0, 20, "red", val => health = val);
    const powerBar = createBlockBar("POWER", power, 0, 10, "green", val => power = val);

    charDiv.append(label, healthBar.container, powerBar.container);
    allCharacters.push({ powerBar, updatePower: powerBar.update });


    const flipBtn = document.createElement('button');
    flipBtn.textContent = 'flip';
    flipBtn.onclick = () => {
      ; charDiv.classList.toggle('flipped');
      syncToLocalStorage();

    };

    const sideBtns = document.createElement('div');
    sideBtns.className = 'side-buttons';
    const healthGroup = document.createElement('div');
    healthGroup.className = 'button-group red';
    healthGroup.append(healthBar.minus3, healthBar.minus, healthBar.plus, healthBar.plus3);

    const powerGroup = document.createElement('div');
    powerGroup.className = 'button-group green';
    powerGroup.append(powerBar.minus3, powerBar.minus, powerBar.plus, powerBar.plus3);

    sideBtns.append(healthGroup, powerGroup, flipBtn);


    if (side === 'left') {
      sideBtns.classList.add('left-buttons');
      wrapper.append(sideBtns, charDiv);
    } else {
      sideBtns.classList.add('right-buttons');
      wrapper.append(charDiv, sideBtns);
    }

    sideEl.appendChild(wrapper);
    syncToLocalStorage();

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

      syncToLocalStorage();

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


  document.getElementById('powerPhaseBtn').onclick = () => {
    allCharacters.forEach(c => {
      const blocks = c.powerBar.container.querySelectorAll('.block').length;
      if (blocks < 10) {
        c.updatePower(blocks + 1);
      }
    });
  };

  document.getElementById('updateDisplayBtn').onclick = () => {
    const leftWrappers = document.getElementById('left').querySelectorAll('.character-wrapper');
    const rightWrappers = document.getElementById('right').querySelectorAll('.character-wrapper');
    
    const collect = (wrappers, side) => Array.from(wrappers).map(w => {
      const label = w.querySelector('h3')?.textContent;
      const id = dataSet.find(c => label.includes(c.label.split(' ')[0]))?.id;
  
      const healthCount = w.querySelectorAll('.bar-container')[0].querySelectorAll('.block').length;
      const powerCount = w.querySelectorAll('.bar-container')[1].querySelectorAll('.block').length;
      const flipped = w.querySelector('.character')?.classList.contains('flipped');
  
      return { id, side, health: healthCount, power: powerCount, flipped };
    });
  
    const state = [...collect(leftWrappers, 'left'), ...collect(rightWrappers, 'right')];
    localStorage.setItem('mcpoState', JSON.stringify(state));
  };
  

  function syncToLocalStorage() {
    const state = [];
    document.querySelectorAll('.character-wrapper').forEach(wrapper => {
      const isLeft = leftSide.contains(wrapper);
      const charDiv = wrapper.querySelector('.character');
      const label = charDiv.querySelector('h3').textContent;

      const char = dataSet.find(c => label.includes(c.label));
      if (!char) return;

      const healthBar = charDiv.querySelectorAll('.bar-container')[0];
      const powerBar = charDiv.querySelectorAll('.bar-container')[1];

      const health = healthBar ? healthBar.querySelectorAll('.block').length : 0;
      const power = powerBar ? powerBar.querySelectorAll('.block').length : 0;

      const flipped = charDiv.classList.contains('flipped');
      state.push({ id: char.id, side: isLeft ? 'left' : 'right', health, power, flipped });
    });

    localStorage.setItem('mcpoState', JSON.stringify(state));
  }
