import React from "react";
import "../css/shared.scss";

import Output from "./RenderedOutput";
import Edit from "./EditCV";

function App() {
  const [basicInfo, setBasicInfo] = React.useState({
    fullName: "John Smith",
    email: "john.smith@example.com",
    phoneNumber: "044150100",
    desc: "I am a motivated and experienced Fullstack developer looking for new challenges to overcome!",
  });
  const [education, setEducation] = React.useState([
    {
      name: "College of Smithland",
      type: "college",
      title: "Sample",
      desc: "College ball.",
      start: 2002,
      end: 2005,
    },
    {
      name: "University of Smithland",
      type: "university",
      title: "CS",
      desc: "I studied here.",
      start: 2006,
      end: 2011,
    },
  ]);
  const [jobExperience, setJobExperience] = React.useState([
    {
      name: "Thomas and Devs",
      jobTitle: "Web developer",
      jobTask:
        "I improved and maintained the company's main website using react.",
      start: 2011,
      end: 2019,
    },
  ]);

  return (
    <div className="wrapper">
      <Edit
        basicInfo={basicInfo}
        education={education}
        jobExperience={jobExperience}
        setBasicInfo={setBasicInfo}
        setEducation={setEducation}
        setJobExperience={setJobExperience}
      />
      <Output
        basicInfo={basicInfo}
        education={education}
        jobExperience={jobExperience}
      />
    </div>
  );
}

export default App;
