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
            <img src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/38009370_10160705761200607_8128982368032653312_n.jpg?_nc_cat=104&_nc_ht=scontent-dfw5-1.xx&oh=b362c082bebd6a3c19e89d75d944d981&oe=5D6B1E0D" className="img-fluid rounded-circle mb-3" alt="" id="profilePicture" />
            <p className="h2 mb-4" id="profileName"><span className="member-firstname"></span> <span className="member-lastname"></span></p>
          </div>
        </div>

        {/* Form Row */}
        <div className="row p-3 profileRow">
          <div className="col-6 d-flex justify-content-start align-items-center">
              <p className="profileInformation h5">Name</p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <p className="profileInformationContent"><span className="member-email">Mary Dang</span></p>
          </div>
        </div>

        <div className="row p-3 profileRow">
          <div className="col-6 d-flex justify-content-start align-items-center">
              <p className="profileInformation h5">Description</p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <p className="profileInformationContent"><span className="member-email">This is my coding project for Launch Partner</span></p>
          </div>
        </div>

      </div>
    )
  }
}

export default ProfilePage;