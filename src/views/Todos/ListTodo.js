import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "./style.scss";
import AddToDo from "./AddToDo";
class ListToDo extends React.Component {
  state = {
    listTodos: [
      { id: "todo1", title: "doing homework" },
      { id: "todo2", title: "watch hentai" },
      { id: "todo3", title: "fap" },
    ],
  };
  addNewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });
    toast.success("De vai loz");
  };
  deleteToDo = (todo) => {
    console.log("check", todo);
    let current = this.state.listTodos;
    current = current.filter((item) => item.id !== todo.id);
    this.setState({
      listTodos: current,
    });
  };
  render() {
    let { listTodos } = this.state;
    return (
      <div className="list-todo-container">
        <AddToDo addNewTodo={this.addNewTodo}></AddToDo>
        <div className="list-todo-content">
          {listTodos &&
            listTodos.length > 0 &&
            listTodos.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  <span>
                    {index + 1}-{item.title}
                  </span>
                  <button className="edit">Edit</button>
                  <button
                    className="delete"
                    onClick={() => this.deleteToDo(item)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
export default ListToDo;
