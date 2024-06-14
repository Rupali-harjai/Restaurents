import React from "react";
// import UserContext from "../utilis/useContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props), console.log(this.props.name + "component constructor");

    this.state = {
      count: 0,
      count2: 1,
      userInfo: {
        login: "Dummy",
        public_repos: "0",
      },
    };
  }

  async componentDidMount() {
    console.log(this.props.name + "component did MOUNT");
    const data = await fetch("https://api.github.com/users/Rupali-harjai");
    const json = await data.json();
    const response = json;
    console.log(response);
    this.setState({
      userInfo: response,
    });
    this.timer = setInterval(() => {
      console.log("Timer start");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("componet did update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("component will unmount");
  }
  render() {
    console.log(this.props.name + "component rendered");

    const { name, location } = this.props;
    const { count, count2 } = this.state;

    const { login, public_repos } = this.state.userInfo;
    return (
      <div className="user">
        Class based
        <h1>Count:{count}</h1>
        {/* <div>
       Login : 
        <UserContext.Consumer>
        {({loggedInUser}) => <h3>{loggedInUser}</h3>}
        </UserContext.Consumer>
       </div> */}
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count + 2,
            });
          }}
        >
          Increase
        </button>
        <h3>Login Name - {login}</h3>
        <h3>Total Repos - {public_repos}</h3>
        <h1>Count2:{count2}</h1>
        <h2>Name : {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Citizenship : Indian</h2>
      </div>
    );
  }
}

export default UserClass;
