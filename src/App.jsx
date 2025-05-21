import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import {
  Container,
  ToDoList,
  Input,
  Button,
  ListItem,
  Trash,
  Check,
} from "./styles.js";

function App() {
  const [list, setList] = useState(() => {
    const storedList = localStorage.getItem("todoList");
    return storedList ? JSON.parse(storedList) : [];
  });

  const [inputTask, setInputTask] = useState("");

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(list));
  }, [list]);

  function changed(event) {
    setInputTask(event.target.value);
  }

  function buttonActivated() {
    if (inputTask.trim()) {
      setList([
        ...list,
        { id: uuid(), task: inputTask.trim(), finished: false },
      ]);
      setInputTask("");
    }
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      buttonActivated();
    }
  }

  function finishTask(id) {
    const newList = list.map((item) =>
      item.id === id ? { ...item, finished: !item.finished } : item
    );
    setList(newList);
  }

  function deleteItem(id) {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  return (
    <Container>
      <ToDoList>
        <Input
          value={inputTask}
          onChange={changed}
          onKeyDown={handleKeyPress}
          placeholder="O que tenho que fazer..."
        />
        <Button onClick={buttonActivated}>Adicionar</Button>

        <ul>
          {list.length > 0 ? (
            list.map((item) => (
              <ListItem isFinished={item.finished} key={item.id}>
                <Check onClick={() => finishTask(item.id)} />
                <li>{item.task}</li>
                <Trash onClick={() => deleteItem(item.id)} />
              </ListItem>
            ))
          ) : (
            <h3>Não há itens na lista</h3>
          )}
        </ul>
      </ToDoList>
    </Container>
  );
}

export default App;
