import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { ReactComponent as EditButton } from "./assets/EditButton.svg";
import { ReactComponent as SaveButton } from "./assets/SaveButton.svg";
import { ReactComponent as TrashButton } from "./assets/TrashButton.svg";
function App() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");
  const changeTodo = (e) => {
    setTodo(e.target.value);
  };
  const addTodo = () => {
    setTodoList((prevTodoList) => [...prevTodoList, todo]);
    setTodo("");
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <h1 className="mt-5">Todo List</h1>
      <div className="d-flex w-50 justify-content-center">
        <Form.Control
          className="w-75 me-3"
          placeholder="Todo input..."
          value={todo}
          onChange={changeTodo}
        />
        <Button onClick={addTodo}>Add todo</Button>
      </div>
      <div className="mt-3 w-50">
        <ul className="">
          {todoList.map((todoItem, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-center justify-content-between"
            >
              <div className="d-flex ">
                <Form.Check type="checkbox" />
                <label> {todoItem}</label>x
              </div>
              <div>
                <EditButton
                  width={20}
                  height={20}
                  className="me-2"
                  style={{ cursor: "pointer" }}
                ></EditButton>
                <SaveButton
                  width={20}
                  height={20}
                  className="me-2"
                  style={{ cursor: "pointer" }}
                ></SaveButton>
                <TrashButton
                  width={20}
                  height={20}
                  style={{ cursor: "pointer" }}
                ></TrashButton>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
