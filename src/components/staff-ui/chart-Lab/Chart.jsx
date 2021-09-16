import React from 'react'
import './chart.css'
import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";

export default function Chart({ title, data, dataKey, grid }) {
    return (
        <div>
            <div className="chart">
                <h3 className="chartTitle">{title}</h3>
                <ResponsiveContainer width="100%" aspect={4 / 1}>
                    <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#005792" />
                    <Line type="monotone" dataKey={dataKey} stroke="#005792" />
                    <Tooltip />
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                    </LineChart >
                </ResponsiveContainer>
            </div>
        </div>
    )
}
