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
    editTodo: {},
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
  handeleEdit = (todo) => {
    let { editTodo, listTodos } = this.state;
    let isEmtyObj = Object.keys(todo).length === 0;
    if (!isEmtyObj && editTodo.id === todo.id) {
      let copyList = [...listTodos];
      console.log("save case");

      let objIndex = copyList.findIndex((item) => item.id === todo.id);
      listTodos[objIndex].title = editTodo.title;
      this.setState({
        listTodos: copyList,
        editTodo: {},
      });
      toast.success("cap nhat thanh cmn cong!");
      return;
    }

    this.setState({
      editTodo: todo,
    });
  };
  handeleOnchangeEdit = (event) => {
    let edit = { ...this.state.editTodo };
    edit.title = event.target.value;
    console.log("check change", edit.title);
    this.setState({
      editTodo: edit,
    });
  };
  render() {
    let { listTodos, editTodo } = this.state;
    let isEmtyObj = Object.keys(editTodo).length === 0;
    console.log(isEmtyObj);
    return (
      <div className="list-todo-container">
        <p>Simple ToDo app with React.js Kurisu</p>
        <AddToDo addNewTodo={this.addNewTodo}></AddToDo>
        <div className="list-todo-content">
          {listTodos &&
            listTodos.length > 0 &&
            listTodos.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  {isEmtyObj === true ? (
                    <span>
                      {index + 1}-{item.title}
                    </span>
                  ) : (
                    <>
                      {editTodo.id === item.id ? (
                        <span>
                          {" "}
                          {index + 1} -{" "}
                          <input
                            value={editTodo.title}
                            onChange={(event) =>
                              this.handeleOnchangeEdit(event)
                            }
                          />
                        </span>
                      ) : (
                        <span>
                          {index + 1} - {item.title}
                        </span>
                      )}
                    </>
                  )}
                  <button
                    onClick={() => this.handeleEdit(item)}
                    className="edit"
                  >
                    {isEmtyObj === false && editTodo.id === item.id
                      ? "save"
                      : "edit"}
                  </button>
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
