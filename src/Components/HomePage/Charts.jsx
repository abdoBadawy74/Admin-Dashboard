
import { PieChart, Pie, Cell, Tooltip, LabelList } from "recharts";
const data = [
  { name: "في المحفظة", value: 38.6, color: "#38A169" },
  { name: "تم الدفع", value: 22.5, color: "#81E6D9" },
  { name: "تم السحب", value: 30.8, color: "#4299E1" },
  { name: "في انتظار الدفع", value: 8.1, color: "#CBD5E0" },
];
const data2 = [
  { name: "مكتملة", value: 38.6, color: "#2A9D8F" },
  { name: "جارية", value: 22.5, color: "#B1E3FF" },
  { name: "ملغاة ", value: 30.8, color: "#A1E3CB" },
  { name: " تحت الانتظار", value: 8.1, color: "#A8C5DA" },
];

export default function Charts() {
  return (
    <div className="flex gap-3 w-[100%]  flex-wrap justify-around mt-5 ">

        <div>
          <div className="flex flex-row-reverse justify-between px-5 mb-2">
            <select className="text-black">
              <option className="text-gray-400">اليوم</option>
              <option className="text-gray-400">الأسبوع</option>
              <option className="text-gray-400">الشهر</option>
              <option className="text-gray-400">السنة</option>

            </select>
            <h4>تقارير الاستشارات</h4>
          </div>
          <div className="flex flex-row-reverse items-center justify-between">
            {/* Chart Section */}
            <div style={{ textAlign: "center" }}>
              <PieChart width={200} height={200}>
                <Pie
                  data={data2}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2} // Adds space between cells
                  dataKey="value"
                  className="transition-all"
                  isAnimationActive={true}
                  style={{
                    transition: " 0.3s ease-in-out !important",
                  }}
                >
                  {data2.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      label={entry.value}
                      fill={entry.color}
                      // stroke={activeIndex === index ? entry.color : "#fff"}
                      // strokeWidth={activeIndex === index ? 3 : 1}
                      style={{
                        transition: "transform 0.3s ease-in-out !important",
                        // transform: activeIndex === index ? "scale(1.02)" : "scale(1)",
                        outline: "none",
                      }} />
                  ))}
                </Pie>
              </PieChart>
            </div>

            {/* Data Section */}
            <div>
              <ul>
                {data2.map((item, index) => (
                  <li key={index} className="flex justify-between items-center gap-2" >
                    <span style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      backgroundColor: item.color,
                      display: "inline-block",
                      marginRight: "5px"
                    }}></span>
                    <span>{item.value}%</span>
                    <span style={{ color: item.color }}>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-row-reverse justify-between px-5 mb-2">
            <select className="text-black">
              <option className="text-gray-400">اليوم</option>
              <option className="text-gray-400">الأسبوع</option>
              <option className="text-gray-400">الشهر</option>
              <option className="text-gray-400">السنة</option>

            </select>
            <h4>تقارير المدفوعات</h4>
          </div>
          <div className="flex flex-row-reverse items-center justify-between">
            {/* Chart Section */}
            <div style={{ textAlign: "center" }}>
              <PieChart width={200} height={200}>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  // paddingAngle={3} // Adds space between cells
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      label={entry.value}
                      fill={entry.color}
                      // stroke={activeIndex === index ? entry.color : "#fff"}
                      // strokeWidth={activeIndex === index ? 3 : 1}
                      style={{
                        outline: "none",
                      }} />
                  ))}

                  <LabelList
                    dataKey="value"
                    position="inside"
                    className="text-[10px] bg-black label"
                    style={{
                      fill: "#2E343E"
                    }}
                    formatter={(value) => `${value}%`}
                  />

                </Pie>
              </PieChart>
              <Tooltip />
              <h4>5200 ر.س</h4>
            </div>

            {/* Data Section */}
            <div>
              <ul>
                {data.map((item, index) => (
                  <li key={index} className="flex justify-between items-center gap-2" >
                    <span style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      backgroundColor: item.color,
                      display: "inline-block",
                      marginRight: "5px"
                    }}></span>
                    <span>{item.value}%</span>
                    <span style={{ color: item.color }}>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
  )
}
