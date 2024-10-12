// src/components/charts/TableWithRightColumnGorizontalBar.jsx

import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register necessary components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const ChartRightBars = () => {
    // Sample data for skills and points
    const skillsData = [
        { skill: 'JavaScript', points: 75 },
        { skill: 'React', points: 90 },
        { skill: 'CSS', points: 65 },
        { skill: 'Python', points: 80 },
    ];

    return (
        <div style={{ margin: '0 auto', width: '600px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                <tr>
                    <th style={{ textAlign: 'left', padding: '8px' }}>Skill</th>
                    <th style={{ textAlign: 'left', padding: '8px' }}>Points</th>
                </tr>
                </thead>
                <tbody>
                {skillsData.map((data, index) => {
                    // Data for individual bar chart
                    const barData = {
                        labels: [''],
                        datasets: [
                            {
                                label: 'Points',
                                data: [data.points],
                                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                                borderColor: 'rgba(75, 192, 192, 1)',
                                borderWidth: 1,
                            },
                        ],
                    };

                    // Chart options
                    const options = {
                        indexAxis: 'y', // Horizontal bars
                        scales: {
                            x: {
                                min: 0,
                                max: 100, // Assuming points are out of 100
                            },
                        },
                        plugins: {
                            legend: {
                                display: false,
                            },
                            tooltip: {
                                enabled: false,
                            },
                        },
                        maintainAspectRatio: false,
                    };

                    return (
                        <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
                            <td style={{ padding: '8px', width: '30%' }}>{data.skill}</td>
                            <td style={{ padding: '8px', display: 'flex', alignItems: 'center' }}>
                                <div style={{ width: '80%', height: '30px' }}>
                                    <Bar data={barData} options={options} />
                                </div>
                                <span style={{ marginLeft: '10px' }}>{data.points}</span>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
};

export default ChartRightBars;