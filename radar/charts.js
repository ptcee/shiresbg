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
const filters = [
    { id: 'tag-a', label: 'A' },
    { id: 'tag-b', label: 'B' },
    { id: 'tag-c', label: 'C' },
    { id: 'tag-d', label: 'D' },
    { id: 'tag-e', label: 'E' },
    { id: 'tag-f', label: 'F' },
    { id: 'tag-g', label: 'G' },
    { id: 'tag-h', label: 'H' },
    { id: 'tag-i', label: 'I' },
    { id: 'tag-j', label: 'J' },
    { id: 'tag-k', label: 'K' },
    { id: 'tag-l', label: 'L' },
    { id: 'tag-m', label: 'M' },
    { id: 'tag-n', label: 'N' },
    { id: 'tag-o', label: 'O' },
    { id: 'tag-p', label: 'P' },
    { id: 'tag-q', label: 'Q' },
    { id: 'tag-r', label: 'R' },
    { id: 'tag-s', label: 'S' },
    { id: 'tag-t', label: 'T' },
    { id: 'tag-u', label: 'U' },
    { id: 'tag-v', label: 'V' },
    { id: 'tag-w', label: 'W' },
    { id: 'tag-x', label: 'X' },
    { id: 'tag-y', label: 'Y' },

    { id: 'threat-2', label: 'Threat 2' },
    { id: 'threat-3', label: 'Threat 3' },
    { id: 'threat-4', label: 'Threat 4' },
    { id: 'threat-5', label: 'Threat 5' },
    { id: 'threat-6', label: 'Threat 6' },
    { id: 'threat-4', label: 'Threat 7' },
    { id: 'threat-8', label: 'Threat 8' },
    { id: 'show-all', label: 'Show All' }
];

const filterContainer = document.getElementById('filters');

filters.forEach(filter => {
    const button = document.createElement('button');
    button.id = filter.id;
    button.className = 'filter';
    button.textContent = filter.label;
    filterContainer.appendChild(button);
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

document.getElementById('resetData').addEventListener('click', () => {
    for (let i = 0; i < myChart.data.datasets.length; i++) {
        myChart.getDatasetMeta(i).hidden = true;
    }
    myChart.update();

    const allButtons = document.querySelectorAll('#buttonContainer button');
    allButtons.forEach(button => button.classList.remove('selected'));
});





