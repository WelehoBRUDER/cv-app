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
        <input
          type="text"
          className="name"
          value={basicInfo.fullName}
          onChange={(e) => editBasicInfo({ fullName: e.target.value })}
        />
        <input
          type="text"
          className="email"
          value={basicInfo.email}
          onChange={(e) => editBasicInfo({ email: e.target.value })}
        />
        <input
          type="text"
          className="number"
          value={basicInfo.phoneNumber}
          onChange={(e) => editBasicInfo({ phoneNumber: e.target.value })}
        />
        <textarea
          type="text"
          className="desc"
          value={basicInfo.desc}
          onChange={(e) => editBasicInfo({ desc: e.target.value })}
        />
      </div>
      <div className="editEducation">
        <button className="createNewEducation" onClick={addEducation}>
          Add Education
        </button>
        {education.map((edu, index) => {
          return (
            <div className="eduTemplate">
              <input
                type="text"
                className="eduName"
                value={edu.name}
                onChange={(e) =>
                  editEducation({ name: e.target.value, index: index })
                }
              />
              <input
                type="text"
                className="eduType"
                value={edu.type}
                onChange={(e) =>
                  editEducation({ type: e.target.value, index: index })
                }
              />
              <input
                type="text"
                className="eduTitle"
                value={edu.title}
                onChange={(e) =>
                  editEducation({ title: e.target.value, index: index })
                }
              />
              <input
                type="text"
                className="eduDesc"
                value={edu.desc}
                onChange={(e) =>
                  editEducation({ desc: e.target.value, index: index })
                }
              />
              <input
                type="number"
                className="eduStart"
                value={edu.date.start}
                onChange={(e) =>
                  editEducation({
                    date: { start: e.target.value, end: edu.date.end },
                    index: index,
                  })
                }
              />
              <input
                type="number"
                className="eduEnd"
                value={edu.date.end}
                onChange={(e) =>
                  editEducation({
                    date: { start: edu.date.start, end: e.target.value },
                    index: index,
                  })
                }
              />
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
            <div className="eduTemplate">
              <input
                type="text"
                className="jobName"
                value={job.name}
                onChange={(e) =>
                  editJob({ name: e.target.value, index: index })
                }
              />
              <input
                type="text"
                className="jobTitle"
                value={job.jobTitle}
                onChange={(e) =>
                  editJob({ jobTitle: e.target.value, index: index })
                }
              />
              <input
                type="text"
                className="jobTask"
                value={job.jobTask}
                onChange={(e) =>
                  editJob({ jobTask: e.target.value, index: index })
                }
              />
              <input
                type="number"
                className="jobStart"
                value={job.date.start}
                onChange={(e) =>
                  editJob({
                    date: { start: e.target.value, end: job.date.end },
                    index: index,
                  })
                }
              />
              <input
                type="number"
                className="jobEnd"
                value={job.date.end}
                onChange={(e) =>
                  editJob({
                    date: { start: job.date.start, end: e.target.value },
                    index: index,
                  })
                }
              />
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
