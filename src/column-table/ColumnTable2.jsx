import "./ColumnTable.css";

// Converts data to this structure first
// {
//   rows: [
//     {
//       columns: [
//         {
//           columnType: "string",
//           value: "Stepan",
//         },
//         {
//           columnType: "number",
//           value: 26,
//         },
//       ],
//     },
//   ],
// };

function ColumnTable2({ data }) {
  function convertDataToTableData(data) {
    if (!data || !data.length || !data[0].values.length) {
      return [];
    }

    const headers = data.map((item) => item.label);

    const rows = [];

    const rowsCount = data[0].values.length;

    for (let rowIndex = 0; rowIndex < rowsCount; rowIndex++) {
      const columns = [];

      data.forEach((_columns) => columns.push(_columns.values[rowIndex]));

      rows.push({
        columns,
      });
    }

    return { headers, rows };
  }

  function onCellClick(cellData) {
    console.log("clicked cell type:", cellData.type);
    console.log("clicked cell all data:", cellData);
  }

  const { rows, headers } = convertDataToTableData(data);

  return (
    <table className="column-table">
      {/* Table Headers */}
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {row.columns.map((column) => (
              <td key={column.value} onClick={() => onCellClick(column)}>
                {column.value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ColumnTable2;
