import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Регистрируем необходимые компоненты Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const CHART_COLORS = [
    '#FFAAAA',
    '#98CFFF',
    '#FFDA7C',
    '#CBE7FF',
    '#FFE8E1',
    '#EFBC87',
    '#D0E3BD',
    '#BBBBBE',
    '#A6A6D0'
];

const ChartDoughnut = ({ data }) => {
    // Проверяем, что данные существуют
    if (!data || data.length === 0) {
        return <div>Нет данных для отображения</div>;
    }

 // console.log('Входные данные:', JSON.stringify(data, null, 2));
    console.log('Входные данные:', data);

    // Готовим данные для графика
    const chartData = {
        labels: data.map(item => item.position),
        datasets: [
            {
                data: data.map(item => item.percentage),
                backgroundColor: CHART_COLORS.slice(0, data.length),
                borderColor: CHART_COLORS.slice(0, data.length),
                borderWidth: 1,
            },
        ],
    };

    // Настройки графика
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'right',
                labels: {
                    usePointStyle: true,
                    padding: 20,
                    font: {
                        size: 12
                    },
                    generateLabels: (chart) => {
                        const datasets = chart.data.datasets;
                        return chart.data.labels.map((label, i) => ({
                            text: `${label} (${datasets[0].data[i]}%)`,
                            fillStyle: datasets[0].backgroundColor[i],
                            hidden: false,
                            lineCap: 'butt',
                            lineDash: [],
                            lineDashOffset: 0,
                            lineJoin: 'miter',
                            lineWidth: 1,
                            strokeStyle: datasets[0].backgroundColor[i],
                            pointStyle: 'circle',
                            rotation: 0,
                        }));
                    }
                }
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        const label = context.label || '';
                        const value = context.raw || 0;
                        return `${label}: ${value}%`;
                    }
                }
            }
        },
        cutout: '60%', // Размер отверстия в центре
    };

    return (
        <div style={{ height: '320px', width: '100%', maxWidth: '600px', margin: '0 auto' }}>
            <Doughnut data={chartData} options={options} />
        </div>
    );
};

export default ChartDoughnut;