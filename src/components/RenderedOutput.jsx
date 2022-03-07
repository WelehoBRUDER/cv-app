import React from "react";
import "../css/shared.scss";
import "../css/output.scss";

const RenderedOutput = (props) => {
  const { basicInfo, education, jobExperience } = props;
  return (
    <div className="outputContainer">
      <div className="outputArea">
        <div className="basicInfo">
          <p className="fullname">{basicInfo.fullName}</p>
          <p className="email">{basicInfo.email}</p>
          <p className="phoneNumber">{basicInfo.phoneNumber}</p>
          <p className="desc">{basicInfo.desc}</p>
        </div>
        <div className="education">
          <h2 className="educationTitle">Education</h2>
          {education.map((school) => {
            return (
              <div className={school.type}>
                <h3 className="schoolName">{school.name}</h3>
                <p className="schoolDesc">{school.desc}</p>
                <p className="educationTitle">{school.title}</p>
                <p className="schoolDate">
                  {school.date.start + " - " + school.date.end}
                </p>
              </div>
            );
          })}
        </div>
        <div className="jobExperience">
          <h2 className="jobExperienceTitle">Job Experience</h2>
          {jobExperience.map((job) => {
            return (
              <div className="jobWrapper">
                <h3 className="companyName">{job.name}</h3>
                <p className="jobTitle">{job.jobTitle}</p>
                <p className="jobTask">{job.jobTask}</p>
                <p className="jobDate">
                  {job.date.start + " - " + job.date.end}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RenderedOutput;
