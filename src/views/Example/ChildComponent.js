import React from "react";
import "./demo.scss";
class ChildComponent extends React.Component {
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
    showJobs: false,
  };
  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };
  handleOnClickDelete = (item) => {
    console.log("handle delete check", item);
    this.props.deleteJob(item);
  };
  render() {
    console.log("Check props: ", this.props);
    // let name = this.props.name;
    // let age = this.props.age;
    let { name, age, arrJobs } = this.props;
    let { showJobs } = this.state;
    let check = showJobs === true ? "showJobs = true" : "showJobs = false";
    console.log("condition check: ", check);
    return (
      <>
        {showJobs === false ? (
          <div>
            <button className="btn-show" onClick={() => this.handleShowHide()}>
              Show
            </button>
          </div>
        ) : (
          <>
            <div>
              ChildComponent: {name} - {age}
            </div>
            <div className="Job-lists">
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary} <></>{" "}
                    <span>
                      <button onClick={() => this.handleOnClickDelete(item)}>
                        X
                      </button>
                    </span>
                  </div>
                );
              })}
            </div>

            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}

        {/* <div>
                <input value ={this.state.name} type="text"
                onChange={(event)=> this.handleOnChangeName(event)}></input>
                My name is {this.state.name}
            </div>
            <div className="third">
                <button onClick={()=>this.handeleClick()}>Clickme</button>
            </div> */}
      </>
    );
  }
}
export default ChildComponent;
