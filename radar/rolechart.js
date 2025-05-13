const roleCtx = document.getElementById('roleChart');

const roleChartData = {
    labels: Object.values(roleMap),
    datasets: [{
        label: 'Role Count',
        data: new Array(Object.keys(roleMap).length).fill(0),
        backgroundColor: ['rgba(224, 0, 0, 0.5)', 'rgba(0, 11, 224, 0.5)', 'rgba(11, 224, 0, 0.5)', 'rgba(0, 209, 224, 0.5)', 'rgba(224, 180, 0, 0.5)', 'rgba(150, 0, 224, 0.5)', 'rgba(224, 0, 191, 0.5)', 'rgba(224, 90, 0, 0.5)', 'rgba(90, 224, 0, 0.5)', 'rgba(190, 64, 221, 0.5)', 'rgba(221, 64, 190, 0.5)'],
        borderColor: ['rgba(224, 0, 0)', 'rgba(0, 11, 224)', 'rgba(11, 224, 0)', 'rgba(0, 209, 224)', 'rgba(224, 180, 0)', 'rgba(150, 0, 224)', 'rgba(224, 0, 191)', 'rgba(224, 90, 0)', 'rgba(90, 224, 0)', 'rgba(190, 64, 221)', 'rgba(221, 64, 64)'],
        borderWidth: 1
    }]
};

const roleChart = new Chart(roleCtx, {
    type: 'bar',
    data: roleChartData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                title: {
                    display: false,
                    text: 'Roles',
                    color: '#000',
                    font: {
                        size: 14,
                    }
                },
                grid: {
                    color: 'rgb(219, 219, 219)',
                },
                ticks: {
                    color: '#000',
                    font: {
                        size: 8,
                    }
                }
            },
            y: {
                title: {
                    display: false,
                    text: 'Count',
                    color: '#000',
                    font: {
                        size: 14,
                    }
                },
                grid: {
                    color: 'rgb(219, 219, 219)',
                },
                ticks: {
                    color: '#000',
                    beginAtZero: true,
                    stepSize: 1,
                    font: {
                        size: 8,
                    }
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    afterLabel: function (context) {
                        const roleIndex = context.dataIndex;
                        const matchingLabels = [];

                        myChart.data.datasets.forEach((dataset, index) => {
                            const meta = myChart.getDatasetMeta(index);
                            const button = document.getElementById(dataset.id);

                            if (!meta.hidden && button && button.classList.contains('selected')) {
                                const roles = dataSet[index].role;

                                if (Array.isArray(roles) && roles.includes(roleIndex + 1)) {
                                    matchingLabels.push(dataset.label);
                                }
                            }
                        });

                        return matchingLabels.length > 0 ? matchingLabels : ['No matching entries'];
                    }

                }
            }
        }


    }
});

