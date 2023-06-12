import "./ColumnTable.css";

// Doesn't convert data

function ColumnTable({ data }) {
  const rowsCount = data && data.length ? data[0].values?.length || 0 : 0;

  function onCellClick(cellData) {
    console.log("clicked cell type:", cellData.type);
    console.log("clicked cell all data:", cellData);
  }

  return (
    <table className="column-table">
      {/* Table Headers */}
      <thead>
        <tr>
          {(data || []).map((column) => (
            <th key={column.label}>{column.label}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {Array(rowsCount)
          .fill(0)
          .map((_item, rowIndex) => (
            <tr key={rowIndex}>
              {(data || []).map((columns) => (
                <td
                  key={columns.values[rowIndex].value}
                  onClick={() => onCellClick(columns.values[rowIndex])}
                >
                  {columns.values[rowIndex].value}
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default ColumnTable;
