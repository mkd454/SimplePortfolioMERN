import React, { Component } from "react";
import "./App.css";
import API from "./utils/API";

import ProfilePage from "./components/profilepage/profilepage";

class App extends Component {
  state = {
    profiles: [],
    showPage: 'menu',
    needUpdate: false,
    name: "",
    picture: "",
    description: ""
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

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  updateProfile = userId => {
    let updatedInfo = {
      name: this.state.name,
      picture: this.state.picture,
      description: this.state.description
    }
    API.updateUser(userId,updatedInfo)
      .then(res => this.setState({
        needUpdate: true
      }))
      .catch(err => console.log(err));
  }

  componentDidUpdate() {
    if (this.state.needUpdate) {
      API.getProfiles()
      .then(res => {this.setState({
        profiles: res.data,
        needUpdate: false
        })
      })
      .catch(err => console.log(err));
    } else {
      return;
    }
  }

  // findUser = userId => {
  //   console.log("Pulling User Profile: " + userId);
  // }

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
            id={this.state.profiles[0]._id}
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
      );
    } else if (this.state.showPage === 'update') {
      return (
        <div className="p-3">
          <form>
            <div className="form-group">
              <label for="exampleFormControlInput1">Name</label>
              <input 
                onChange={this.handleInputChange}
                value={this.state.name}
                name="name"
                type="text" 
                className="form-control" 
                id="exampleFormControlInput1" 
                placeholder="Ex. John Doe" 
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput2">Picture</label>
              <input 
                onChange={this.handleInputChange}
                value={this.state.picture}
                name="picture"
                type="text" 
                className="form-control" 
                id="exampleFormControlInput2" 
                placeholder="Ex. https://via.placeholder.com/150C/O https://placeholder.com/" 
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Description</label>
              <textarea 
                onChange={this.handleInputChange}
                value={this.state.description}
                name="description"
                className="form-control" 
                id="exampleFormControlTextarea1" 
                rows="3"
              ></textarea>
            </div>
          </form>
          <div className="row p-3">
            <div className="col-6">
              <button type="button" className="btn btn-block btn-large btn-outline-danger"
              onClick={() => this.showForm('example')}>Cancel  <span className="fa fa-sign-out fa-lg" aria-hidden="true"></span> </button>
            </div>
            <div className="col-6">
              <button type="button" className="btn btn-block btn-large btn-success"
              onClick={() => this.updateProfile(this.state.profiles[0]._id)}>Update  <span className="fa fa-calendar-check-o fa-md" aria-hidden="true"></span> </button>
            </div>
          </div>
        </div>
      )
    } else if (this.state.showPage === 'create') {
      
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
