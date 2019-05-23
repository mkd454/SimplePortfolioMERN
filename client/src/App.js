import React, { Component } from "react";
import "./App.css";

import ProfilePage from "./components/profilepage/profilepage";

class App extends Component {
  state = {
    profiles: [],
    showPage: 'menu',
    needUpdate: false,
    user: 'example'
  }

  componentDidMount() {
    this.changePage();
  }

  changePage = page => {
    this.setState({
      page: page
    });
  }

  showForm = (formState) => {
    this.setState({
      showPage: formState,
      needUpdate: true
    });
  }

  renderContent = () => {
    if (this.state.profiles.length === 0 && this.state.showPage === 'menu') {
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
          <ProfilePage />
          <div className="row p-3">
            <div className="col-6">
              <button type="button" className="btn btn-block btn-large btn-outline-danger"
              onClick={() => this.showForm('menu')}>Back  <span className="fa fa-sign-out fa-lg" aria-hidden="true"></span> </button>
            </div>
            <div className="col-6">
              <button type="button" className="btn btn-block btn-large btn-success">Update Profile  <span className="fa fa-calendar-check-o fa-md" aria-hidden="true"></span> </button>
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
