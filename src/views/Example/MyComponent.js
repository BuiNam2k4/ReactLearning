import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {
  // state ={
  //     name:"Kurisu",
  //     age:22
  // }
  // handleOnChangeName=(event)=>{
  //     this.setState({
  //         name:event.target.value
  //     })

  // }
  // handeleClick=()=>{

  //     alert('click me')

  // }
  state = {
    firstName: "",
    lastName: "",
    arrJobs: [
      { id: "ID01", title: "Developer", salary: "400 $" },
      { id: "ID02", title: "Tester", salary: "400 $" },
      { id: "ID03", title: "Project manager", salary: "400 $" },
    ],
  };
  addNewJob = (job) => {
    console.log("Check job: ", job);
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };
  deleteJob = (job) => {
    let currentJob = this.state.arrJobs;
    currentJob = currentJob.filter((item) => item.id != job.id);
    this.setState({
      arrJobs: currentJob,
    });
  };

  render() {
    console.log("call render: ", this.state);

    return (
      <>
        <AddComponent addNewJob={this.addNewJob}></AddComponent>

        <ChildComponent
          name={this.state.firstName}
          age={22}
          arrJobs={this.state.arrJobs}
          deleteJob={this.deleteJob}
        ></ChildComponent>
      </>
    );
  }
}
export default MyComponent;
