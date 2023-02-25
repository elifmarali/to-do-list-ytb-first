import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const changeTodo = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = () => {
    setTodoList((prevTodoList) => [...prevTodoList, todo]);
    setTodo("");
  };

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

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
            <li key={index} className="mt-2 list-group-item fs-4 ">
              <div className="d-flex justify-content-between">
                <Form.Check type="checkbox" />
                <label htmlFor="" className="">
                  {" "}
                  {todoItem}
                </label>
                <div>Butonlar</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
