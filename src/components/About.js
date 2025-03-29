import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }
  componentDidMount() {
    console.log("parent didmount");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>I am learing react js with swiggy app</h2>
        <User name={"rajesh middivenuka functional()"} />
        <UserClass
          name={"rajesh form the class based"}
          location={"bengaluru"}
        />
      </div>
    );
  }
}
export default About;
