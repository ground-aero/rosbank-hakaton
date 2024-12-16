import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const ChartDynamicSkills = ({ data }) => {

    // console.log('incom data Dynamic Skills:', JSON.stringify( data, null, 2) )

    // Prepare data for the chart
    const labels = data.map(item => {
        // Convert date to a more readable format
        const date = new Date(item.rating_date);
        return date.toLocaleDateString('ru-RU', {
            month: 'short',
            year: 'numeric'
        });
    });

    const chartData = {
        labels,
        datasets: [
            {
                label: 'Средний рейтинг',
                data: data.map(item => parseFloat(item.average_rating)),
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                tension: 0.1
            },
            {
                label: 'Рейтинг технических навыков',
                data: data.map(item => parseFloat(item.average_rating_hard)),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                tension: 0.1
            },
            {
                label: 'Рейтинг soft-навыков',
                data: data.map(item => parseFloat(item.average_rating_soft)),
                borderColor: 'rgb(54, 162, 235)',
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                tension: 0.1
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: false,
                text: 'Динамика развития навыков',
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 5,
                ticks: {
                    stepSize: 1,
                    callback: function(value) {
                        return value.toFixed(0);
                    }
                },
                title: {
                    display: true,
                    text: 'Средний Балл'
                }
            }
        }
    };

    return (
        <div style={{
            width: '100%',
            maxWidth: '800px',
            margin: '0 auto',
            position: 'relative'
        }}>
            <Line data={chartData} options={options} />
        </div>
    );
};

export default ChartDynamicSkills;