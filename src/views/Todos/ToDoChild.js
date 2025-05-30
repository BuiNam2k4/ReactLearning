import React from "react";

class ToDoChild extends React.Component {
  render() {
    let { ToDoList } = this.props;
    console.log(ToDoList);
    return <div></div>;
  }
}
export default ToDoChild;
