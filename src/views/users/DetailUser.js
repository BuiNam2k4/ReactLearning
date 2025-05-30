import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

class DetailUser extends React.Component {
  state = {
    user: {},
  };
  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;
      let res = await axios
        .get(`https://reqres.in/api/users/${id}`, {
          headers: {
            "x-api-key": "reqres-free-v1",
          },
        })
        .catch((error) => {
          console.log("error: ", error.data);
        });

      console.log("check res user", res);
      this.setState({
        user: res && res.data && res.data.data ? res.data.data : {},
      });
    }
  }
  handeleBack = () => {
    this.props.history.push("/user");
  };
  render() {
    let { user } = this.state;
    let isEmtyObj = Object.keys(user).length === 0;

    return (
      <>
        {isEmtyObj == false && (
          <>
            <div> Hello user with id {this.props.match.params.id}</div>
            <div>
              User's Name: {user.first_name} - {user.last_name}{" "}
            </div>
            <div>User's Email: {user.email}</div>
            <div>
              <img src={user.avatar}></img>
            </div>
            <div>
              <button onClick={() => this.handeleBack()}>Back </button>
            </div>
          </>
        )}
      </>
    );
  }
}
export default withRouter(DetailUser);
