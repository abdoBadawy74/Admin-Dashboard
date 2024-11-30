import "./Table.css";
import { Link } from "react-router-dom";

const Table = ({ headers, rows, rowKey, customStyles, route = {} }) => {
  const { tableStyle, headerStyle, cellStyle } = customStyles;

  return (
    <div className="table-container">
      <table style={tableStyle} className="custom-table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                style={{
                  ...headerStyle,
                  ...header.style,
                  backgroundColor: header.bgColor,
                  width: header.key === "name" ? "220px" : "auto",
                }}
                className="table-header"
                colSpan={header.key === "name" ? 2 : 1}
              >
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => {
            // Check if route is "users" to wrap the row with a Link
            const isUsersRoute = route === "users" || route === "consultants";
            const rowId = row.id; // Assuming each row has a unique `id` property
            const rowContent = (
              <>
                {headers.map((header, colIndex) => (
                  <td
                    key={colIndex}
                    style={{
                      ...cellStyle,
                      ...header.cellStyle,
                      textAlign: header.align || "center",
                      columnSpan: header.key === "name" && row.img ? 2 : 1,
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
              </>
            );

            return isUsersRoute ? (
              <Link
                to={`/${route}/${rowId}`} // Use the row's unique id in the route
                key={rowId} // Use `id` as the key
                className="table-row-link" // Add this class for styling the link as a row
                style={{ textDecoration: "none", display: "table-row" }} // Ensures it looks like a row
              >
                {rowContent}
              </Link>
            ) : (
              <tr
                key={rowKey ? row[rowKey] : rowIndex}
                className="table-row"
              >
                {rowContent}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
