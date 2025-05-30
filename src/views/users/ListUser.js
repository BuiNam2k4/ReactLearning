import React from "react";
import axios from "axios";
import "./list.scss";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
class ListUser extends React.Component {
  state = {
    listUser: [],
  };
  async componentDidMount() {
    // axios
    //   .get("https://reqres.in/api/users?page=2", {
    //     headers: {
    //       "x-api-key": "reqres-free-v1",
    //     },
    //   })
    //   .then((res) => {
    //     console.log("check res: ", res);
    //   })
    //   .catch((error) => {
    //     console.log("error", error.response.data);
    //   });
    let res = await axios
      .get("https://reqres.in/api/users?page=2", {
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      })

      .catch((error) => {
        console.log("error", error);
      });
    console.log("res: ", res);
    this.setState({
      listUser: res && res.data && res.data.data ? res.data.data : [],
    });
  }
  handeleView = (user) => {
    console.log("check", this.props, user);
    this.props.history.push(`/user/${user.id}`);
  };

  render() {
    let { listUser } = this.state;

    return (
      <div className="list-user-container">
        <div className="title">Fetch all User</div>
        <div className="list-user-content">
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <div
                  onClick={() => this.handeleView(item)}
                  key={item.id}
                  className="child"
                >
                  {item.id} - {item.first_name} - {item.last_name}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
export default withRouter(ListUser);
