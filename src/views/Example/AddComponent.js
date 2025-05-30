import React from "react";

class AddComponent extends React.Component {
  state = {
    title: "",
    salary: "",
  };
  handleChangetitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };
  handleSummit = (event) => {
    event.preventDefault();
    if (!this.state.title || !this.state.salary) {
      alert("missing require params");
      return;
    }
    console.log("check data input: ", this.state);
    this.props.addNewJob({
      id: Math.floor(Math.random() * 1000),
      title: this.state.title,
      salary: this.state.salary,
    });
    this.setState({
      title: "",
      salary: "",
    });
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="fname">Job's Title:</label>
          <br></br>
          <input
            type="text"
            value={this.state.title}
            onChange={(event) => this.handleChangetitle(event)}
          />
          <br></br>
          <label htmlFor="lname">Salary: </label>
          <br></br>
          <input
            type="text"
            value={this.state.salary}
            onChange={(event) => this.handleChangeSalary(event)}
          />
          <br></br>
          <input
            type="submit"
            onClick={(event) => this.handleSummit(event)}
          ></input>
        </form>
      </div>
    );
  }
}

export default AddComponent;
