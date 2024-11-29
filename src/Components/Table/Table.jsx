import "./Table.css";

const Table = ({ headers, rows, rowKey, customStyles = {} }) => {
  const { tableStyle, headerStyle, cellStyle } = customStyles;

  return (
    <div className="table-container">
      <table style={tableStyle} className="custom-table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                style={{ ...headerStyle, ...header.style,backgroundColor: header.bgColor, width: header.key === "name" ? " 220px !important": "auto" }}
                className="table-header"
                colSpan={header.key === "name" ? 2 : 1}
              >
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowKey ? row[rowKey] : rowIndex} className="table-row">
              {headers.map((header, colIndex) => (
                <td
                  key={colIndex}
                  style={{
                    ...cellStyle,
                    ...header.cellStyle,
                    textAlign: header.align || "center",
                    columnSpan :header.key === "name" && row.img ? 2 : 1,
                  }}
                  colSpan={header.key === "name" ? 2 : 1}
                  className="table-cell"
                >
                  {/* Render image and name together if `img` is present */}
                  {header.key === "name" && row.img ? (
                    <div className="name-with-img">
                      <img
                        src={row.img}
                        alt={row.name}
                        className="profile-img"
                      />
                      <span className="user-name">{row[header.key]}</span>
                    </div>
                  ) : (
                    row[header.key]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
