Chart.defaults.backgroundColor = '#c0c0c0';
Chart.defaults.borderColor = '#c0c0c0';
Chart.defaults.color = '#fff';
Chart.defaults.font.size = 16;
Chart.defaults.font.family = "'Palanquin', serif";
Chart.defaults.elements.point.pointStyle = 'rect';

let ctx = document.getElementById('abom');

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
        data: [4, 4, 4, 2, 3, 1],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
    },
    {
        label: 'Agent Venom (4)',
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

        },
        elements: {
            line: {
                borderWidth: 3
            }
        }
    },
});



