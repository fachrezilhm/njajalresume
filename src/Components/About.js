import React, { Component } from "react";
import Slide from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Slide bottom duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Ilham Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>{name}</h2>

              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2></h2>
                  <p className="address">
                    <span>
                      {street}
                      <br />
                      {city} {state}, {zip}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default About;
