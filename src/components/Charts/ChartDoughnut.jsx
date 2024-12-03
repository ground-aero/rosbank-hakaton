import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const CHART_COLORS = [
    '#CBE7FF', '#A6A6D0', '#98CFFF',
    '#FFDA7C', '#FFE8E1', '#EFBC87',
    '#D0E3BD', '#BBBBBE', '#FFAAAA',
];

const ChartDoughnut = ({ data }) => {
    if (!data || data.length === 0) {
        return <div>Нет данных для отображения</div>;
    }

    const chartData = {
        labels: data.map(item => item.position),
        datasets: [
            {
                data: data.map((item) => item.percentage),
                backgroundColor: CHART_COLORS.slice(0, data.length),
                borderColor: CHART_COLORS.slice(0, data.length),
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false  // Отключаем встроенную легенду
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
        cutout: '60%',
    };

    const totalEmployeeCount = data.reduce((total, item) => total + item.position_employee_count, 0);

    const legendItems = data.map((item, index) => ({
        color: CHART_COLORS[index],
        label: `${item.position} (${item.percentage}%)`,
    }));

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            maxWidth: '800px',
            margin: '0 auto'
        }}>
            <div style={{
                position: 'relative',
                width: '320px',
                height: '320px'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 10,
                    textAlign: 'center',
                    pointerEvents: 'none'
                }}>
                    <div style={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                        color: '#42434BFF'
                    }} title="Количество сотрудников">
                        {totalEmployeeCount}
                    </div>
                </div>
                <Doughnut
                    data={chartData}
                    options={options}
                />
            </div>
            <div style={{
                marginLeft: '20px',
                display: 'flex',
                flexDirection: 'column'
            }}>
                {legendItems.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '10px'
                        }}
                    >
                        <div
                            style={{
                                width: '20px',
                                height: '20px',
                                backgroundColor: item.color,
                                marginRight: '10px',
                                borderRadius: '50%'
                            }}
                        />
                        <span>{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChartDoughnut;