import JobList from "./components/JobList";
import Robotcode from "./assets/RobotCode.jpg";
import AIBrain from "./assets/AIBrain.jpg";

function App() {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      function: "Software Development",
      type: "Full-time",
      experience: "2",
      salary: 60000,
      expires: "2023-08-30",
      skills: "React, JavaScript, HTML, CSS",
      location: "New York, NY",
      companyLogo: Robotcode,
    },
    {
      id: 2,
      title: "Data Scientist",
      function: "Data Science",
      type: "Contract",
      experience: "3",
      salary: 80000,
      expires: "2023-08-30",
      skills: "Python, Machine Learning, Data Analysis",
      location: "San Francisco, CA",
      companyLogo: AIBrain,
    },
  ];
  return (
    <>
      <JobList jobs={jobs} />
    </>
  );
}

export default App;
