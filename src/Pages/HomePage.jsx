import Anyltics from "../Components/HomePage/Anyltics"
import { PieChart, Pie, Cell, Legend } from "recharts";
const data = [
    { name: "في المحفظة", value: 38.6, color: "#38A169" },
    { name: "تم الدفع", value: 22.5, color: "#81E6D9" },
    { name: "تم السحب", value: 30.8, color: "#4299E1" },
    { name: "في انتظار الدفع", value: 8.1, color: "#CBD5E0" },
  ];
export default function HomePage() {
    return (
       <Anyltics/>
       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      {/* Chart Section */}
      <div style={{ textAlign: "center" }}>
        <h3>اليوم</h3>
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
        <h4>5200 ر.س</h4>
      </div>

      {/* Data Section */}
      <div>
        <h4>تقارير المدفوعات</h4>
        <ul>
          {data.map((item, index) => (
            <li key={index} style={{ display: "flex", justifyContent: "space-between", margin: "5px 0" }}>
              <span>{item.value}%</span>
              <span style={{ color: item.color }}>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    )
}
