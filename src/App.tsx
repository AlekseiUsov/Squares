import { useState } from "react";

// utils
import { changeColor, makeNewCells } from "./utils/App";

export interface IElement {
  color: string;
}

function App() {
  const [cells, setCells] = useState<null | IElement[]>(null);

  const createCells = () => {
    const newCells = makeNewCells();
    setCells([...newCells]);
    console.log(newCells);
  };

  const changeCells = (cells: IElement[], index: number) => {
    const newCells = changeColor(cells, index);
    setCells([...newCells]);
  };

  return (
    <div className="App">
      <div className="container">
        {cells && (
          <ul className="list">
            {cells.map((cell, index) => (
              <li
                key={index}
                className="element"
                style={{ backgroundColor: cell.color }}
                onClick={() => changeCells(cells, index)}
              ></li>
            ))}
          </ul>
        )}
        <button className="button" onClick={createCells}>
          {cells ? "Изменить поле" : "Создать поле"}
        </button>
      </div>
    </div>
  );
}

export default App;
