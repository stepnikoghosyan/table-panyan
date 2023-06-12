import logo from "./logo.svg";
import "./App.css";
import ColumnTable from "./column-table/ColumnTable";
import ColumnTable2 from "./column-table/ColumnTable2";
import { MOCK_DATA } from "./MOCK_DATA";

function App() {
  const response = MOCK_DATA;

  return (
    <div className="App">
      <ColumnTable data={response} />
      <ColumnTable2 data={response} />
    </div>
  );
}

export default App;
