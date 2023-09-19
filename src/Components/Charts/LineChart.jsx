import { LineChart as LC, Line, CartesianGrid, XAxis, YAxis } from "recharts";
const LineChart = () => {
  const examData = [
    { exam: 1, math: 85, chemistry: 78, physics: 92, english: 88 },
    { exam: 2, math: 88, chemistry: 75, physics: 89, english: 90 },
    { exam: 3, math: 92, chemistry: 80, physics: 94, english: 92 },
    { exam: 4, math: 78, chemistry: 85, physics: 88, english: 85 },
    { exam: 5, math: 90, chemistry: 88, physics: 91, english: 87 },
  ];

  return (
    <LC width={1000} height={400} data={examData}>
      <Line type="monotone" dataKey="math" stroke="#FF0000" />
      <Line type="monotone" dataKey="chemistry" stroke="#000000" />
      <Line type="monotone" dataKey="physics" stroke="#0000FF" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="exam" />
      <YAxis />
    </LC>
  );
};

export default LineChart;
