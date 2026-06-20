import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function SkillChart({
  required,
  found,
  missing
}) {

  const data = [
    {
      name: "Required",
      value: required
    },
    {
      name: "Found",
      value: found
    },
    {
      name: "Missing",
      value: missing
    }
  ];

  return (
    <div className="chart-box">
      <h3>Skill Gap Analysis</h3>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SkillChart;