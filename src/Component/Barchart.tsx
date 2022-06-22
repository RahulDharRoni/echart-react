import React from 'react';
import ReactECharts from 'echarts-for-react';
// import '../CSS/chart.css'

const Barchart = () => {
    const option = {
        xAxis: {
            type: 'category',
            name: 'Alcohol',
            data: ['redWine', 'B-PRIDE', 'RC', 'RS', 'BAG']
        },
        yAxis: {
            type: "value",
            name: "Malic Acid",
            axisLabel: {
                formatter: "{value} %"
            }
        },
        series: [
            {
                data: [120, 200, 150, 80, 70],
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                }
            }
        ]
    };
    return (
        <div>
            <ReactECharts option={option} />;
        </div>
    );
};

export default Barchart;