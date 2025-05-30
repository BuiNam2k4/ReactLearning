import React from "react";
import logo from "../../assets/images/107935945_p1_master1200.jpg";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
class home extends React.Component {
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.props.history.push("/todo");
  //   }, 3000);
  // }
  render() {
    return (
      <>
        <div>Home page</div>
        <div>
          <img
            style={{ width: "300px", height: " 500px", marginTop: "20px" }}
            src={logo}
          ></img>
        </div>
      </>
    );
  }
}
export default withRouter(home);
