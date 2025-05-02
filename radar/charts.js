Chart.defaults.backgroundColor = '#c0c0c0';
Chart.defaults.borderColor = 'rgb(117, 117, 117)';
Chart.defaults.color = '#fff';
Chart.defaults.font.size = 16;
Chart.defaults.font.family = "'Palanquin', serif";
Chart.defaults.elements.point.pointStyle = 'rect';
Chart.defaults.plugins.legend.position = 'bottom';
Chart.defaults.plugins.legend.labels.boxWidth = 15;
Chart.defaults.plugins.legend.labels.boxHeight = 15;
Chart.defaults.plugins.legend.labels.padding = 15;
Chart.defaults.plugins.legend.labels.textAlign = 'center';


let ctx = document.getElementById('charts');

const data = {
    labels: [
        'Damage',
        'Durability',
        'Speed',
        'Range',
        'Control',
        'Support',
    ],
    datasets: dataSet
};

var myChart = new Chart(ctx, {
    type: 'radar',
    data: data,
    options: {
        scales: {
            r: {
                pointLabels: {
                    font: {
                        size: 12
                    },
                },
                angleLines: {
                    display: true,
                    color: '#fff',
                },
                suggestedMin: 0,
                suggestedMax: 5,
                min: 0,
                max: 5,
                ticks: {
                    stepSize: 1,
                    color: 'rgb(199, 199, 199)',
                    backdropColor: '#363636',
                    font: {
                        size: 12
                    },
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            }
        },
        elements: {
            line: {
                borderWidth: 3
            }
        }
    },

});

// CHARACTER LEGEND BUTTONS //

const container = document.getElementById('buttonContainer');

buttonData.forEach((btn, index) => {
    const button = document.createElement('button');
    button.id = btn.id;
    button.className = ` ${btn.classes}`;
    button.addEventListener('click', () => {
        toggleData(index);
        button.classList.toggle('selected');
    });
    container.appendChild(button);
});


const elements = document.querySelectorAll('.data-label');

elements.forEach((element, index) => {
    if (data.datasets[index]) {
        element.style.backgroundColor = data.datasets[index].pointBackgroundColor;
        element.innerText = data.datasets[index].label;
    }
});


function toggleData(value) {
    const visData = myChart.isDatasetVisible(value);
    if (visData === true) {
        myChart.hide(value);
    }

    if (visData === false) {
        myChart.show(value);
    }
}



// FILTER BUTTONS //
const filterContainer = document.getElementById('filters');
const breakAfterIds = ['tag-y', 'xforce'];

filters.forEach(filter => {
    const button = document.createElement('button');
    button.id = filter.id;
    button.className = filter.class;
    button.textContent = filter.label;
    filterContainer.appendChild(button);

    if (breakAfterIds.includes(filter.id)) {
        const flexBreak = document.createElement('div');
        flexBreak.className = 'flex-break';
        filterContainer.appendChild(flexBreak);
    }
});



document.querySelectorAll("#filters button").forEach(button => {
    button.addEventListener("click", function () {
        const tag = this.id;
        const buttons = document.querySelectorAll(".legendBox .lgd-btn");

        if (tag === "show-all") {
            buttons.forEach(btn => {
                btn.classList.remove("hidden");
            });
        } else {
            buttons.forEach(btn => {
                if (btn.classList.contains(tag)) {
                    btn.classList.remove("hidden");
                } else {
                    btn.classList.add("hidden");
                }
            });
        }
    });
});

// TOGGLE FILTERS //
function openFilters() {
    var x = document.getElementById("filter-toggle-box");
    var currentDisplay = window.getComputedStyle(x).display;
  
    if (currentDisplay === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  

//STAT FILTERS//
document.querySelectorAll('#dropdowns select').forEach(select => {
    select.addEventListener('change', function () {
        filterButtons();
    });
});

function filterButtons() {
    const damageValue = document.getElementById('damageFilter').value;
    const durabilityValue = document.getElementById('durabilityFilter').value;
    const speedValue = document.getElementById('speedFilter').value;
    const rangeValue = document.getElementById('rangeFilter').value;
    const controlValue = document.getElementById('controlFilter').value;
    const supportValue = document.getElementById('supportFilter').value;

    buttonData.forEach((btn, index) => {
        let showButton = true;
        if (damageValue !== "all" && dataSet[index].data[0] !== parseInt(damageValue)) showButton = false;
        if (durabilityValue !== "all" && dataSet[index].data[1] !== parseInt(durabilityValue)) showButton = false;
        if (speedValue !== "all" && dataSet[index].data[2] !== parseInt(speedValue)) showButton = false;
        if (rangeValue !== "all" && dataSet[index].data[3] !== parseInt(rangeValue)) showButton = false;
        if (controlValue !== "all" && dataSet[index].data[4] !== parseInt(controlValue)) showButton = false;
        if (supportValue !== "all" && dataSet[index].data[5] !== parseInt(supportValue)) showButton = false;

        const button = document.getElementById(btn.id);
        if (showButton) {
            button.classList.remove('hidden');
        } else {
            button.classList.add('hidden');
        }
    });
}

// WRITEUPS //

document.querySelectorAll('.lgd-btn').forEach(button => {
    button.addEventListener('click', () => {
        const id = button.id;
        const datasetEntry = dataSet.find(ds => ds.id === id);
        const writeupContainer = document.querySelector('#drawer .writeup');
        const existingWriteup = writeupContainer.querySelector(`#writeup-${id}`);
        document.querySelector( '.writenull' ).style.display = 'none';

        if (datasetEntry && datasetEntry.writeup) {
            if (existingWriteup) {
                writeupContainer.removeChild(existingWriteup);
            } else {
                const div = document.createElement('div');
                div.id = `writeup-${id}`;
                div.className = 'writeblock';
                div.innerHTML = datasetEntry.writeup;
                writeupContainer.appendChild(div);
            }
        }
    });
});



//RESET SHIT//
document.getElementById('resetData').addEventListener('click', () => {
    for (let i = 0; i < myChart.data.datasets.length; i++) {
        myChart.getDatasetMeta(i).hidden = true;
    }
    myChart.update();

    const allButtons = document.querySelectorAll('#buttonContainer button');
    allButtons.forEach(button => button.classList.remove('selected'));

    const dropdowns = document.querySelectorAll('.filter-dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.value = 'all';
    });

    document.querySelector('#drawer .writeup').innerHTML = '';
    document.querySelector( '.writenull' ).style.display = 'block';

    filterButtons();
});

// SIDE DRAWER WITH WRITEUPS //

function openNav() {
    document.getElementById("drawer").style.width = "350px";
}

function closeNav() {
    document.getElementById("drawer").style.width = "0";
}




