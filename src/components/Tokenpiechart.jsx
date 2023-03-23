// import "./styles.css"
import React, { useCallback, useState } from "react"
import { ResponsiveContainer ,PieChart, Pie, Sector } from "recharts"

const data = [
  { name: "Seed", value: 2 },
  { name: "Private", value: 6 },
  { name: "Public Sale", value: 8 },
  { name: "Marketing", value: 6 },
  { name: "Team", value: 18 },
  { name: "Strategic Funding", value: 15 },
  { name: "Ecosystem Rewards", value: 35 },
  { name: "Liquidity", value: 5 },
  { name: "Advisory", value: 5 },
]

// const dataMock = [
//     { title: "Seed 2%", value: 2.0, color: "#3260ed", name: "Seed" },
//     { title: "Private  6%", value: 6.0, color: "#8ca8ff", name: "Private" },
//     {
//       title: "Public Sale 8%",
//       value: 8.0,
//       color: "#7af0d1",
//       name: "Public Sale",
//     },
//     {
//       title: "Marketing 6%",
//       value: 6.0,
//       color: "#3290ed",
//       name: "Marketing",
//     },
//     { title: "Team 18%", value: 18.0, color: "#7c7af0", name: "Team" },
//     {
//       title: "Strategic Funding 15% ",
//       value: 15.0,
//       color: "#32e4ed",
//       name: "Strategic Funding",
//     },
//     {
//       title: "Ecosystem Rewards 35% ",
//       value: 35.0,
//       color: "#32bbed",
//       name: "Ecosystem Rewards",
//     },
//     {
//       title: "Liquidity 5%",
//       value: 5.0,
//       color: "#4b00e2",
//       name: "Liquidity",
//     },
//     { title: "Advisory 5%", value: 5.0, color: "#4bffe2", name: "Advisory" },
//   ];


const renderActiveShape = props => {
  const RADIAN = Math.PI / 180
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
    name, color
  } = props
  const sin = Math.sin(-RADIAN * midAngle)
  const cos = Math.cos(-RADIAN * midAngle)
  const sx = cx + (outerRadius + 10) * cos
  const sy = cy + (outerRadius + 10) * sin
  const mx = cx + (outerRadius + 30) * cos
  const my = cy + (outerRadius + 30) * sin
  const ex = mx + (cos >= 0 ? 1 : -1) * 22
  const ey = my
  const textAnchor = cos >= 0 ? "start" : "end"

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#fff"
      >{`${name}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Share ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  )
}

export default function Tokenpiechart() {
  const [activeIndex, setActiveIndex] = useState(0)
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index)
    },
    [setActiveIndex]
  )

  return (<div className='bg-gradient-to-b from-[#000120] to-[#220056] text-center items-center'>
    <ResponsiveContainer minHeight={500}>
    <PieChart width={400} height={400} >
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={100}
        outerRadius={140}
        fill="#4CC9F0"
        dataKey="value"
        onMouseEnter={onPieEnter}
      />
    </PieChart>
    </ResponsiveContainer></div>
    
  )
}
