import { BarChart as BC, Bar, CartesianGrid, XAxis, YAxis } from "recharts";

const BarChart = () => {
  const examData = [
    { exam: 1, math: 85, chemistry: 78, physics: 92, english: 88 },
    { exam: 2, math: 88, chemistry: 75, physics: 89, english: 90 },
    { exam: 3, math: 92, chemistry: 80, physics: 94, english: 92 },
    { exam: 4, math: 78, chemistry: 85, physics: 88, english: 85 },
    { exam: 5, math: 90, chemistry: 88, physics: 91, english: 87 },
  ];
  return (
    <BC width={1000} height={400} data={examData}>
      <Bar dataKey="math" fill="#0000FF" />
      <Bar dataKey="chemistry" fill="#FF0000" />
      <Bar dataKey="physics" fill="#000000" />
      <Bar dataKey="english" fill="#00FF00" />
      <XAxis dataKey="exam" />
      <YAxis />
    </BC>
  );
};

export default BarChart;
