const roleCtx = document.getElementById('roleChart');

const roleChartData = {
    labels: Object.values(roleMap),
    datasets: [{
        label: 'Role Count',
        data: new Array(Object.keys(roleMap).length).fill(0),
        backgroundColor: 'rgba(0, 230, 0, 0.75)',
        borderColor: 'rgb(0, 230, 0)',
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
            }
        }
    }
});

