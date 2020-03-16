import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faUserPlus } from '@fortawesome/free-solid-svg-icons'
import Faker from "faker";
import Header from "./components/Header/Header";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      users: [],
      count: 0,
      total: 0
    };
  }
 

  componentWillMount() {
    for (let i = 0; i < 15; i++) {
      const user = {
        name: Faker.internet.userName(),
        email: Faker.internet.email(),
        avatar: Faker.internet.avatar(),
        price: Faker.random.number()
      };
      this.setState(prevState => ({
        users: [...prevState.users, user]
      }));
    }
  }
  
  renderUsers(user) {
    return (
      <div style={{border: "solid 1px black"}} id="photos">
        <div id="info">
          <div id="left-info">
            <img src={user.avatar} alt={user.name} width="50" height="50" />
          </div>
          <div id="right-info">
            <h4>Name: {user.name}</h4>
            <h4>Email: {user.email}</h4>
            <h3>
              Salary: <span>$</span> <span id="price">{user.price}</span>
            </h3>
            <button id="btn" onClick={()=>{
              this.setState((state) => {
                let price=parseInt(document.getElementById("price").innerText)
                return {count: state.count + 1,total:state.total+price}
              });
            }}> <FontAwesomeIcon icon={faUserPlus} /> Add me</button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Header></Header>
        <div id="full-panel">
          <div id="left">
            {this.state.users.map(user => this.renderUsers(user))}
          </div>
          <div id="right" style={{border: "solid 1px black"}}> 
             <h3>Total Employee:{this.state.count}</h3>
             <h3>Total Salary:{this.state.total}</h3>
             <button id="btn"> Review </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
