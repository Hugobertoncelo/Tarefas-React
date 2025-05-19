import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Container } from "./styles.js";

function App() {
  const [list, setList] = useState([{ id: uuid(), task: "Nada" }]);
  const [inputTask, setInputTask] = useState("");

  function changed(event) {
    setInputTask(event.target.value);
  }

  function buttonActivated() {
    setList([...list, { id: uuid(), task: inputTask }]);
  }

  return (
    <Container>
      <input onChange={changed} placeholder="O que tenho que fazer..." />
      <button onClick={buttonActivated}>Adcionar</button>

      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.task}</li>
        ))}
      </ul>
    </Container>
  );
}

export default App;
