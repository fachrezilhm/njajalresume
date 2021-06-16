import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        <Slide bottom duration={100}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Pendidikan</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide bottom duration={100}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Pengalaman Kerja</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>
        <Slide bottom duration={100}>
          <div className="row skills">
            <div className="three columns header-col">
              <h1>
                <span>Skill</span>
              </h1>
            </div>
              <table>
                <tr>
                <td>
                  <ul>
                    <li>PHP</li>
                    <li>HTML</li>
                    <li>ReactJs</li>
                    <li>CSS</li>
                    <li>WordPress.org</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Oracle Database</li>
                    <li>Star UML</li>
                    <li>Adobe Photoshop</li>
                    <li>Adobe Premiere Pro</li>
                    <li>Adobe Illustration</li>
                  </ul>
                </td>
                <td>
                <ul>
                    <li>Adobe XD</li>
                    <li>Microsoft Office</li>
                    <li>Microsoft Excel</li>
                    <li>Microsoft Power Point</li>
                    <li>Microsoft Visio</li>
                    </ul>
                </td>
                </tr>
              </table>
          </div>
          </Slide>
      </section>
    );
  }
}

export default Resume;
