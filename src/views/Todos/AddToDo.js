import React from "react";
import { ToastContainer, toast } from "react-toastify";
class AddToDo extends React.Component {
  state = {
    title: "",
  };
  handleOnChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleClickAdd = () => {
    if (!this.state.title) {
      toast.error("dien du lieu vao!");
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 1000),
      title: this.state.title,
    };
    this.props.addNewTodo(todo);
    this.setState({
      title: "",
    });
  };
  render() {
    console.log(">>call render", this.state);
    return (
      <div className="add-todo">
        <input
          value={this.state.title}
          onChange={(event) => this.handleOnChangeTitle(event)}
        ></input>
        <button
          onClick={() => this.handleClickAdd()}
          className="add"
          type="button"
        >
          Add
        </button>
      </div>
    );
  }
}
export default AddToDo;
