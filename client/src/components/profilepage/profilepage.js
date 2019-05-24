import React, { Component } from "react";
import "./profilecss.css";

class ProfilePage extends Component {
  render () {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg d-flex justify-content-center mb-5">
          <p className="h1">My Profile</p>
        </nav>

        {/* Profile Image */}
        <div className="row">
          <div className="col-12 text-center">
            <img src={this.props.picture} className="img-fluid rounded-circle mb-3" alt="" id="profilePicture" />
            <p className="h2 mb-4" id="profileName"><span>{this.props.name}</span></p>
          </div>
        </div>

        {/* Form Row */}
        <div className="row p-3 profileRow">
          <div className="col-12 d-flex text-center align-items-center">
              <p className="profileInformation h5 text-center">Description</p>
          </div>
        </div>

        <div className="row p-3 profileRow">
          <div className="col-12">
            <p className="profileInformationContent"><span className="member-email">{this.props.description}</span></p>
          </div>
        </div>

      </div>
    )
  }
}

export default ProfilePage;