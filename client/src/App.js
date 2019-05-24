import React, { Component } from "react";
import "./App.css";
import API from "./utils/API";

import ProfilePage from "./components/profilepage/profilepage";

class App extends Component {
  state = {
    profiles: [],
    showPage: 'menu',
    needUpdate: false,
  }

  componentDidMount() {
    this.getAllProfiles();
  }

  getAllProfiles = () => {
    API.getProfiles()
      .then(res => {this.setState({
        profiles: res.data,
        needUpdate: false
        })
      })
      .catch(err => console.log(err));
  }

  showForm = (formState) => {
    this.setState({
      showPage: formState,
      needUpdate: true
    });
  }

  findUser = userId => {
    console.log("Pulling User Profile: " + userId);
  }

  renderContent = () => {
    if (this.state.showPage === 'menu') {
      return (
        <div>
          <h1>What would you like to do?</h1>
          <button type="button" className="btn btn-primary btn-lg" onClick={() => this.showForm('example')}>See Example Profile</button>
          <button type="button" className="btn btn-primary btn-lg" onClick={() => this.showForm('create')}>Create a Profile</button>
          <button type="button" className="btn btn-primary btn-lg" onClick={() => this.showForm('showAll')}>Show all Profiles</button>
        </div>
      );
    } else if (this.state.showPage === 'example') {
      return (
        <div>
          <ProfilePage 
            name={this.state.profiles[0].name}
            picture={this.state.profiles[0].picture}
            description={this.state.profiles[0].description}
          />
          <div className="row p-3">
            <div className="col-6">
              <button type="button" className="btn btn-block btn-large btn-outline-danger"
              onClick={() => this.showForm('menu')}>Back  <span className="fa fa-sign-out fa-lg" aria-hidden="true"></span> </button>
            </div>
            <div className="col-6">
              <button type="button" className="btn btn-block btn-large btn-success"
              onClick={() => this.showForm('update')}>Update Profile  <span className="fa fa-calendar-check-o fa-md" aria-hidden="true"></span> </button>
            </div>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="profile-container">
        {this.renderContent()}
      </div>
    )
  }
}

export default App;
