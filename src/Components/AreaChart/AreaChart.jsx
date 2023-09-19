import { AreaChart as AC, Area, CartesianGrid, XAxis, YAxis } from "recharts";
const AreaChart = () => {
  const examData = [
    { exam: 1, math: 85, chemistry: 78, physics: 92, english: 45 },
    { exam: 2, math: 88, chemistry: 75, physics: 89, english: 60 },
    { exam: 3, math: 92, chemistry: 80, physics: 94, english: 70 },
    { exam: 4, math: 78, chemistry: 85, physics: 88, english: 90 },
    { exam: 5, math: 90, chemistry: 88, physics: 91, english: 45 },
  ];
  return (
    <div>
      <AC width={1000} height={400} data={examData}>
        <Area
          type="monotone"
          dataKey="math"
          stroke="#FF0000"
          fillOpacity={0.5}
          fill="#00FF00"
        />
        <Area
          type="monotone"
          dataKey="chemistry"
          stroke="#FF0000"
          fillOpacity={0.5}
          fill="#0000FF"
        />
        <Area
          type="monotone"
          dataKey="physics"
          stroke="#FF0000"
          fillOpacity={0.5}
          fill="#FF0000"
        />
        <Area
          type="monotone"
          dataKey="english"
          stroke="#FFFFFF"
          fillOpacity={0.5}
          fill="#000000"
        />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="exam"></XAxis>
        <YAxis />
      </AC>
    </div>
  );
};

export default AreaChart;
