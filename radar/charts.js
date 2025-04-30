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
        },

        {
            label: 'Amazing Spiderman (5)',
            hidden: true,
            data: [3, 5, 5, 2, 2, 4],
            fill: true,
            backgroundColor: 'rgba(158, 0, 0, 0.2)',
            borderColor: 'rgb(255, 15, 15)',
            pointBackgroundColor: 'rgb(255, 15, 15)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 15, 15)'
        },

        {
            label: 'Ancient One (4)',
            hidden: true,
            data: [4, 3, 3, 2, 4, 1],
            fill: true,
            backgroundColor: 'rgba(223, 201, 1, 0.2)',
            borderColor: 'rgb(223, 201, 1)',
            pointBackgroundColor: 'rgb(223, 201, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(223, 201, 1)'
        },

        {
            label: 'Angel (3)',
            hidden: true,
            data: [2, 2, 4, 3, 3, 1],
            fill: true,
            backgroundColor: 'rgba(35, 117, 123, 0.2)',
            borderColor: 'rgb(0, 228, 245)',
            pointBackgroundColor: 'rgb(0, 228, 245)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(0, 228, 245)'
        },

        {
            label: 'Angela (5)',
            hidden: true,
            data: [4, 3, 4, 3, 1, 1],
            fill: true,
            backgroundColor: 'rgba(98, 70, 14, 0.2)',
            borderColor: 'rgb(209, 173, 102)',
            pointBackgroundColor: 'rgb(209, 173, 102)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(209, 173, 102)'
        },

        {
            label: 'Ant-Man (3)',
            hidden: true,
            data: [3, 2, 1, 1, 1, 1],
            fill: true,
            backgroundColor: 'rgba(235, 74, 0, 0.2)',
            borderColor: 'rgb(235, 74, 0)',
            pointBackgroundColor: 'rgb(235, 74, 0)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(235, 74, 0)'
        },

        {
            label: 'Apocalypse (6)',
            hidden: true,
            data: [4, 5, 3, 3, 1, 4],
            fill: true,
            backgroundColor: 'rgba(44, 76, 144, 0.2)',
            borderColor: 'rgb(96, 131, 205)',
            pointBackgroundColor: 'rgb(96, 131, 205)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(96, 131, 205)'
        },

        {
            label: 'Archangel (4)',
            hidden: true,
            data: [4, 2, 4, 3, 1, 1],
            fill: true,
            backgroundColor: 'rgba(32, 114, 162, 0.2)',
            borderColor: 'rgb(101, 183, 230)',
            pointBackgroundColor: 'rgb(101, 183, 230)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(101, 183, 230)'
        },

        {
            label: 'Arnim Zola (3)',
            hidden: true,
            data: [3, 2, 1, 4, 3, 3],
            fill: true,
            backgroundColor: 'rgba(90, 16, 132, 0.2)',
            borderColor: 'rgb(172, 57, 239)',
            pointBackgroundColor: 'rgb(172, 57, 239)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(172, 57, 239)'
        },

    ]
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
document.getElementById('abom').style.backgroundColor = data.datasets[0].pointBackgroundColor;
document.getElementById('abom').innerText = data.datasets[0].label;

document.getElementById('av').style.backgroundColor = data.datasets[1].pointBackgroundColor;
document.getElementById('av').innerText = data.datasets[1].label;

document.getElementById('asm').style.backgroundColor = data.datasets[2].pointBackgroundColor;
document.getElementById('asm').innerText = data.datasets[2].label;

document.getElementById('a1').style.backgroundColor = data.datasets[3].pointBackgroundColor;
document.getElementById('a1').innerText = data.datasets[3].label;

document.getElementById('angl').style.backgroundColor = data.datasets[4].pointBackgroundColor;
document.getElementById('angl').innerText = data.datasets[4].label;

document.getElementById('angla').style.backgroundColor = data.datasets[5].pointBackgroundColor;
document.getElementById('angla').innerText = data.datasets[5].label;

document.getElementById('ant').style.backgroundColor = data.datasets[6].pointBackgroundColor;
document.getElementById('ant').innerText = data.datasets[6].label;




function toggleData(value){
    const visData = myChart.isDatasetVisible(value);
    if(visData === true ){
        myChart.hide(value);
    }

    if(visData === false ){
        myChart.show(value);
    }
}