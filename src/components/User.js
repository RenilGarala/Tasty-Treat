import React from "react";
class User extends React.Component {
  //create cunstructor
  constructor(props) {
    super(props);
   
  }
  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/renilgarala");
    const json = await data.json();

    console.log(json);
  }

  render() {
    const {name, location}= this.props;
    return (
      <div className="p-3 m-3 border-2 w-36">
        <div>{name}</div>
        <div>{location}</div>
      </div>
    );
  }
}

export default User;
