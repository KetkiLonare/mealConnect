import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const DoughnutChart = ({ data }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartRef && chartRef.current) {
            // Destroy previous chart instance if it exists
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            const ctx = chartRef.current.getContext("2d");
            chartInstance.current = new Chart(ctx, {
                type: "doughnut",
                data: {
                    labels: ["Cooked Food", "Uncooked Food", "Packed Food"],
                    datasets: [
                        {
                            label: "Values",
                            data: data,
                            backgroundColor: [
                                "rgba(46, 71, 61)",
                                "rgba(121, 143, 37)",
                                "rgba(238, 246, 201)",
                            ],
                        },
                    ],
                },
                options: {
                    responsive: true,
                    layout: {},
                    plugins: {
                        legend: {
                            position: "top",
                            labels: {
                                font: {
                                    size: 20,
                                },
                            },
                            padding: 24,
                        },
                    },
                },
            });
        }

        return () => {
            // Clean up - destroy the chart instance when component unmounts
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [data]);

    return <canvas ref={chartRef} />;
};

export default DoughnutChart;
