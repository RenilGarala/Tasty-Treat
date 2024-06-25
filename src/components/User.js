import React from "react";
class User extends React.Component {
  //create cunstructor
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("child constructur");
  }

  render() {
    const {name, location}= this.props;
    //you can also destructure this:
    const { count } = this.state;
    return (
      <div className="p-3 m-3 border-2 w-36">
        <div>{name}</div>
        <div>{location}</div>
      </div>
    );
  }
}

export default User;
