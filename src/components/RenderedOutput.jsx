import React, { useEffect } from "react";
import "../css/shared.scss";
import "../css/output.scss";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const RenderedOutput = (props) => {
  const { basicInfo, education, jobExperience, skills } = props;

  // This whole function has been copied from the internet
  // Big help and idea from https://stackoverflow.com/a/55464892
  // Multi page implementation from https://www.freakyjolly.com/multipage-canvas-pdf-using-jspdf/
  const _exportPdf = () => {
    let HTML_Width = document
      .querySelector(".outputArea")
      .getBoundingClientRect().width;
    let HTML_Height = document
      .querySelector(".outputArea")
      .getBoundingClientRect().height;
    let top_left_margin = 15;
    let PDF_Width = HTML_Width + top_left_margin * 2;
    let PDF_Height = PDF_Width * 1.5 + top_left_margin * 2;
    let canvas_image_width = HTML_Width;
    let canvas_image_height = HTML_Height;

    let totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;
    html2canvas(document.querySelector(".outputArea")).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      let pdf = new jsPDF("p", "pt", [PDF_Width, PDF_Height]);
      pdf.addImage(
        imgData,
        "JPG",
        top_left_margin,
        top_left_margin,
        canvas_image_width,
        canvas_image_height
      );
      for (let i = 1; i <= totalPDFPages; i++) {
        pdf.addPage();
        pdf.addImage(
          imgData,
          "JPG",
          top_left_margin,
          -(PDF_Height * i) + top_left_margin * 4,
          canvas_image_width,
          canvas_image_height
        );
      }
      pdf.save(`${basicInfo.fullName}'s CV.pdf`);
    });
  };

  return (
    <div className="outputContainer">
      <button className="downloadPdf" onClick={_exportPdf}>
        Download PDF
      </button>
      <div className="outputArea">
        <div className="basicInfo">
          <p className="fullname">{basicInfo.fullName}</p>
          <p className="email">{basicInfo.email}</p>
          <p className="phoneNumber">{basicInfo.phoneNumber}</p>
          <p className="desc">{basicInfo.desc}</p>
        </div>
        {skills.length > 0 ? (
          <div className="skills">
            <h2 className="skillsTitle">Skills</h2>
            {skills.map((skill) => {
              return (
                <div className="skill">
                  <h3 className="skillName">{skill.skill}</h3>
                  <div className="skillLevelBg">
                    <div
                      className="skillLevel"
                      style={{ width: 20 * (+skill.level + 1) + "%" }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
        {education.length > 0 ? (
          <div className="education">
            <h2 className="educationTitle">Education</h2>
            {education.map((school) => {
              return (
                <div className={school.type}>
                  <h3 className="schoolName">{school.name}</h3>
                  <p className="schoolDesc">{school.desc}</p>
                  <p className="educationTitle">{school.title}</p>
                  <p className="schoolDate">
                    {school.start + " - " + school.end}
                  </p>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
        {jobExperience.length > 0 ? (
          <div className="jobExperience">
            <h2 className="jobExperienceTitle">Job Experience</h2>
            {jobExperience.map((job) => {
              return (
                <div className="jobWrapper">
                  <h3 className="companyName">{job.name}</h3>
                  <p className="jobTitle">{job.jobTitle}</p>
                  <p className="jobTask">{job.jobTask}</p>
                  <p className="jobDate">{job.start + " - " + job.end}</p>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default RenderedOutput;
