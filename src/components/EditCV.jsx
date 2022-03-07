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
      date: { start: null, end: null },
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
      date: { start: null, end: null },
    };
    const jobEditing = [...jobExperience];
    jobEditing.push(defJob);
    return setJobExperience(jobEditing);
  }

  return (
    <div className="editCV">
      <div className="editBasicInfo">
        {Object.entries(basicInfo).map((info) => {
          const key = info[0];
          const value = info[1];
          if (key !== "desc")
            return (
              <input
                type={typeof value === "string" ? "text" : "number"}
                className={key}
                value={value}
                onChange={(e) => editBasicInfo({ [key]: e.target.value })}
              />
            );
          else
            return (
              <textarea
                type="text"
                className={key}
                value={value}
                onChange={(e) => editBasicInfo({ [key]: e.target.value })}
              />
            );
        })}
      </div>
      <div className="editEducation">
        <button className="createNewEducation" onClick={addEducation}>
          Add Education
        </button>
        {education.map((edu, index) => {
          return (
            <div className="eduTemplate">
              {Object.entries(edu).map((slot) => {
                const key = slot[0];
                const value = slot[1];
                return (
                  <input
                    type={typeof value === "string" ? "text" : "number"}
                    className={`edu${key}`}
                    value={value}
                    onChange={(e) =>
                      editEducation({ [key]: e.target.value, index: index })
                    }
                  />
                );
              })}
              <button
                className="removeEdu"
                onClick={() => removeEducation(index)}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
      <div className="editJob">
        <button className="createNewJob" onClick={addJob}>
          Add Job Experience
        </button>
        {jobExperience.map((job, index) => {
          return (
            <div className="jobTemplate">
              {Object.entries(job).map((slot) => {
                const key = slot[0];
                const value = slot[1];
                return (
                  <input
                    type={typeof value === "string" ? "text" : "number"}
                    className={`job${key}`}
                    value={value}
                    onChange={(e) =>
                      editJob({ [key]: e.target.value, index: index })
                    }
                  />
                );
              })}
              <button className="removeJob" onClick={() => removeJob(index)}>
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
