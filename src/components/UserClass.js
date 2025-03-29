import React from "react";
class UserClass extends React.Component {
  // react.component will track it is calss based compnent
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
      },
    };
  }

  //constructor will recive the props// functions are invoked
  // loading the class meenasd creating a new instance of a class
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Rajesh-Middivenuka");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  render() {
    return (
      <div className="userCard">
        <h1>{this.state.userInfo.name}</h1>
        <h2>{this.state.userInfo.created_at}</h2>
        <img src={this.state.userInfo.avatar_url}></img>
      </div>
    );
  }
  //render method can retrund the piece of jsx
}
export default UserClass;
// mounting ->constructor->render dummydata intially->comonentdidmountl (makes an api call) update the state and render the updated value
