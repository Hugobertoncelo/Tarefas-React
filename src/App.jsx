import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function App() {
  const [list, setList] = useState([{ id: uuid(), task: "Nada" }]);

  function changed(event) {
    console.log(event.target.value);
    setList([{ id: uuid(), task: event.target.value }]);

    console.log(list);
  }

  function buttonActivated() {
    console.log("button Activated");
  }

  return (
    <div>
      <div>
        <input onChange={changed} placeholder="O que tenho que fazer..." />
        <button onClick={buttonActivated}>Adcionar</button>

        <ul>
          {list.map((item) => (
            <li key={item.id}>{item.task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
