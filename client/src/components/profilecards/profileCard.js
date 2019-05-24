import React, { Component } from 'react';
import './style.css';

class ProfileCard extends Component {
  render() {
    return (
      <div className="row p-3">
        <div className="col-1"></div>
        <div className="col-10 m-2" id="matchCard">
          <div className="row p-2">
            <div className="col-12 mt-3 text-center">
              <img src={this.props.picture} className="img-fluid rounded-circle mb-3" alt="" id="profilePicture"/>
              <p className="h4 mb-1" id="profileName">{this.props.name}</p>
            </div>
          </div>
          <div className="row p-1 profileRow">
            <div className="col-12 d-flex justify-content-center align-items-center">
                <p className="profileInformation h5">Description</p>
            </div>
            <div className="col-12">
                <p className="profileInformationContent">{this.props.description}</p>
            </div>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    )
  }
}

export default ProfileCard;