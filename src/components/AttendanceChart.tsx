"use client";
import Image from "next/image";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// #region Sample data
const data = [
  {
    name: "Sen",
    Absen: 28,
    Alpha: 5,
    Sick: 4,
    Permit: 2,
    OnDuty: 1,
  },
  {
    name: "Sel",
    Absen: 27,
    Alpha: 6,
    Sick: 3,
    Permit: 2,
    OnDuty: 2,
  },
  {
    name: "Rab",
    Absen: 26,
    Alpha: 7,
    Sick: 4,
    Permit: 1,
    OnDuty: 2,
  },
  {
    name: "Kam",
    Absen: 29,
    Alpha: 4,
    Sick: 3,
    Permit: 2,
    OnDuty: 1,
  },
  {
    name: "Jum",
    Absen: 25,
    Alpha: 6,
    Sick: 5,
    Permit: 2,
    OnDuty: 2,
  },
];

const COLORS = {
  Absen: "#C3EBFA",        
  Alpha: "#CFCEFF",        
  Sick: "#FAE27C",         
  Permit: "#EDF9FD",       
  OnDuty: "#F1F0FF",       
};

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <BarChart
        style={{
          width: "100%",
          maxWidth: "650px",
          maxHeight: "70vh",
          aspectRatio: 1.618,
        }}
        responsive
        data={data}
        barSize={20}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#d1d5db'}}/>
        <YAxis axisLine={false} tickLine={false} tick={{ fill: '#999', fontSize: 12 }}/>
        <Tooltip contentStyle={{borderRadius: "10px", borderColor: "lightgray"}} />
        <Legend align="left" verticalAlign="top" wrapperStyle={{paddingTop:"20px", paddingBottom:"40px"}}/>
        <Bar
          dataKey="Absen"
          fill={COLORS.Absen}
          radius={[10, 10, 0, 0]}
          legendType="circle"
          
        />
        <Bar
          dataKey="Alpha"
          fill={COLORS.Alpha}
          radius={[10, 10, 0, 0]}
          legendType="circle"
        />
        <Bar
          dataKey="Sick"
          fill={COLORS.Sick}
          radius={[10, 10, 0, 0]}
          legendType="circle"
        />
        <Bar
          dataKey="Permit"
          fill={COLORS.Permit}
          radius={[10, 10, 0, 0]}
          legendType="circle"
        />
        <Bar
          dataKey="OnDuty"
          fill={COLORS.OnDuty}
          radius={[10, 10, 0, 0]}
          legendType="circle"
        />
      </BarChart>
    </div>
  );
};

export default AttendanceChart;
