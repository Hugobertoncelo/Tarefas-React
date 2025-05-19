import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Container, ToDoList, Input, Button, ListItem } from "./styles.js";
import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";

function App() {
  const [list, setList] = useState([
    { id: uuid(), task: "Nada", finished: true },
  ]);
  const [inputTask, setInputTask] = useState("");

  function changed(event) {
    setInputTask(event.target.value);
  }

  function buttonActivated() {
    setList([...list, { id: uuid(), task: inputTask, finished: false }]);
  }

  function finishTask(id) {
    const newList = list.map((item) =>
      item.id === id ? { ...item, finished: !item.finished } : item
    );

    setList(newList);
  }

  return (
    <Container>
      <ToDoList>
        <Input onChange={changed} placeholder="O que tenho que fazer..." />
        <Button onClick={buttonActivated}>Adcionar</Button>

        <ul>
          {list.map((item) => (
            <ListItem isFinished={item.finished} key={item.id}>
              <FcCheckmark onClick={() => finishTask(item.id)} />
              <li>{item.task}</li>
              <FcEmptyTrash />
            </ListItem>
          ))}
        </ul>
      </ToDoList>
    </Container>
  );
}

export default App;
