Chart.defaults.backgroundColor = '#c0c0c0';
Chart.defaults.borderColor = '#c0c0c0';
Chart.defaults.color = '#fff';
Chart.defaults.font.size = 16;
Chart.defaults.font.family = "'Palanquin', serif";
Chart.defaults.elements.point.pointStyle = 'rect';
Chart.defaults.plugins.legend.label

let ctx = document.getElementById('charts');

const data = {
    labels: [
        'DAMAGE',
        'DURABILITY',
        'SPEED',
        'RANGE',
        'CONTROL',
        'SUPPORT',
    ],
    datasets: [
        {
            label: 'Abomination (5)',
            hidden: true,
            data: [4, 4, 4, 2, 3, 1],
            fill: true,
            backgroundColor: 'rgba(0, 102, 24, 0.2)',
            borderColor: 'rgb(50, 226, 91)',
            pointBackgroundColor: 'rgb(50, 226, 91)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(50, 226, 91)'
        },
        {
            label: 'Agent Venom (4)',
            hidden: true,
            data: [4, 3, 3, 4, 3, 1],
            fill: true,
            backgroundColor: 'rgba(20, 0, 133, 0.2)',
            borderColor: 'rgb(147, 128, 255)',
            pointBackgroundColor: 'rgb(147, 128, 255)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(147, 128, 255)'
        }

    ]
};

new Chart(ctx, {
    type: 'radar',
    data: data,
    options: {
        scales: {
            r: {
                angleLines: {
                    display: false
                },
                suggestedMin: 0,
                suggestedMax: 5,
                min: 0,
                max: 5,
                ticks: {
                    stepSize: 1,
                    color: 'rgb(255, 255, 255)',
                    backdropColor: 'rgba(155, 0, 0 ,0)',
                }
            }
        },
        plugins: {
            legend: {
                onClick: (click, legendItem, legend) => {
                    const datasets = legend.legendItems.map((dataset, index) => {
                        return dataset.text;
                    });
                    const index = datasets.indexOf(legendItem.text);

                    if (legend.chart.isDatasetVisible(index) === true) {
                        legend.chart.hide(index);
                    } else {
                        legend.chart.show(index);
                    }

                },
                labels: {
                    generateLabels: (Chart) => {
                        let visibility = [];
                        for (let i = 0; i < Chart.data.datasets.length; i++) {
                            if (Chart.isDatasetVisible(i) === true) {
                                visibility.push('rgba(255, 255, 255, 1)');
                            } else {
                                visibility.push('rgba(255, 255, 255, 0.5)');
                            }
                        }

                        return Chart.data.datasets.map(
                            (dataset, index) => ({
                                text: dataset.label,
                                fillStyle: dataset.backgroundColor,
                                strokeStyle: dataset.borderColor,
                                fontColor: visibility[index],
                            })
                        )
                    }
                }
            }
        },
        elements: {
            line: {
                borderWidth: 3
            }
        }
    },
});



