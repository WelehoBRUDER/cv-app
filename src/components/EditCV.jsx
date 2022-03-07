import React, { useEffect } from "react";
import "../css/shared.scss";
import "../css/edit.scss";

const EditCV = (props) => {
  const {
    basicInfo,
    setBasicInfo,
    education,
    setEducation,
    jobExperience,
    setJobExperience,
  } = props;

  function editBasicInfo(data) {
    return setBasicInfo({ ...basicInfo, ...data });
  }

  function editEducation(data) {
    const index = data.index;
    const educationEditing = [...education];
    let editObj = { ...educationEditing[index] };
    editObj = { ...editObj, ...data };
    educationEditing[index] = editObj;
    return setEducation(educationEditing);
  }

  function removeEducation(index) {
    const educationEditing = [...education];
    educationEditing.splice(index, 1);
    return setEducation(educationEditing);
  }

  function addEducation() {
    const defEdu = {
      name: "School name",
      type: "School level",
      title: "Education title",
      desc: "Description",
      start: null,
      end: null,
    };
    const educationEditing = [...education];
    educationEditing.push(defEdu);
    return setEducation(educationEditing);
  }

  function editJob(data) {
    const index = data.index;
    const jobEditing = [...jobExperience];
    let editObj = { ...jobEditing[index] };
    editObj = { ...editObj, ...data };
    jobEditing[index] = editObj;
    return setJobExperience(jobEditing);
  }

  function removeJob(index) {
    const jobEditing = [...jobExperience];
    jobEditing.splice(index, 1);
    return setJobExperience(jobEditing);
  }

  function addJob() {
    const defJob = {
      name: "Company name",
      jobTitle: "Title of your position.",
      jobTask: "Description of your tasks.",
      start: null,
      end: null,
    };
    const jobEditing = [...jobExperience];
    jobEditing.push(defJob);
    return setJobExperience(jobEditing);
  }

  const loc = {
    name: "Name",
    fullName: "Fullname",
    email: "Email Address",
    phoneNumber: "Phone Number",
    type: "School Level",
    title: "Education Title",
    jobTitle: "Job Title",
    jobTask: "Task Description",
    desc: "Description",
    start: "Year started",
    end: "Year ended",
  };

  return (
    <div className="editCV">
      <div className="edit BasicInfo">
        <div className="Template">
          {Object.entries(basicInfo).map((info) => {
            const key = info[0];
            const value = info[1];
            if (key === "index") return;
            if (key !== "desc")
              return (
                <div className="inputWrapper">
                  <label htmlFor={`basic${key}`}>{loc[key]}</label>
                  <input
                    type={typeof value === "string" ? "text" : "number"}
                    className={key}
                    id={`basic${key}`}
                    value={value}
                    onChange={(e) => editBasicInfo({ [key]: e.target.value })}
                  />
                </div>
              );
            else
              return (
                <div className="textWrapper">
                  <label htmlFor={`basic${key}`}>{loc[key]}</label>
                  <textarea
                    type="text"
                    className={key}
                    id={`basic${key}`}
                    value={value}
                    onChange={(e) => editBasicInfo({ [key]: e.target.value })}
                  />
                </div>
              );
          })}
        </div>
      </div>
      <div className="edit Education">
        <button className="createNewEducation" onClick={addEducation}>
          Add Education
        </button>
        {education.map((edu, index) => {
          return (
            <div className="edu Template">
              {Object.entries(edu).map((slot) => {
                const key = slot[0];
                const value = slot[1];
                if (key === "index") return;
                return (
                  <div className="inputWrapper">
                    <label htmlFor={`edu${key}`}>{loc[key]}</label>
                    <input
                      type={typeof value === "string" ? "text" : "number"}
                      className={`edu${key}`}
                      id={`edu${key}`}
                      value={value}
                      onChange={(e) =>
                        editEducation({ [key]: e.target.value, index: index })
                      }
                    />
                  </div>
                );
              })}
              <button className="remove" onClick={() => removeEducation(index)}>
                Remove
              </button>
            </div>
          );
        })}
      </div>
      <div className="edit Job">
        <button className="createNewJob" onClick={addJob}>
          Add Job Experience
        </button>
        {jobExperience.map((job, index) => {
          return (
            <div className="job Template">
              {Object.entries(job).map((slot) => {
                const key = slot[0];
                const value = slot[1];
                return (
                  <div className="inputWrapper">
                    <label htmlFor={`job${key}`}>{loc[key]}</label>
                    <input
                      type={typeof value === "string" ? "text" : "number"}
                      className={`job${key}`}
                      id={`job${key}`}
                      value={value}
                      onChange={(e) =>
                        editJob({ [key]: e.target.value, index: index })
                      }
                    />
                  </div>
                );
              })}
              <button className="remove" onClick={() => removeJob(index)}>
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EditCV;
