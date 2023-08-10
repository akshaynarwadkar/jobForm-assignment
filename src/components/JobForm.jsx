import React, { useState, useEffect } from "react";

const JobForm = ({ job }) => {
  const [jobData, setJobData] = useState({ ...job });

  useEffect(() => {
    setJobData({ ...job });
  }, [job]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setJobData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (event) => {
    const logoFile = event.target.files[0];
    setJobData((prevData) => ({ ...prevData, companyLogo: logoFile }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(jobData);
  };

  return (
    <div className="container">
      <div className="apply_box">
        <h2>Create a New Job</h2>
        <form onSubmit={handleSubmit}>
          <div className="form_container">
            <div className="form_control">
              <label>Job Title:</label>
              <input
                type="text"
                name="title"
                value={jobData.title}
                onChange={handleInputChange}
              />
            </div>

            <div className="form_control">
              <label>Job Function:</label>
              <input
                type="text"
                name="function"
                value={jobData.function}
                onChange={handleInputChange}
              />
            </div>

            <div className="form_control">
              <label>Job type:</label>
              <input
                type="text"
                name="type"
                value={jobData.type}
                onChange={handleInputChange}
              />
            </div>

            <div className="form_control">
              <label>Experience:</label>
              <input
                type="number"
                name="experience"
                value={jobData.experience}
                onChange={handleInputChange}
              />
            </div>
            <div className="form_control">
              <label>Salary:</label>
              <input
                type="number"
                name="salary"
                value={jobData.salary}
                onChange={handleInputChange}
              />
            </div>
            <div className="form_control">
              <label>Job expires in:</label>
              <input
                type="date"
                name="expires"
                value={jobData.expires}
                onChange={handleInputChange}
              />
            </div>
            <div className="form_control">
              <label>Skills:</label>
              <input
                type="text"
                name="skills"
                value={jobData.skills}
                onChange={handleInputChange}
              />
            </div>
            <div className="form_control">
              <label>Job location:</label>
              <input
                type="text"
                name="location"
                value={jobData.location}
                onChange={handleInputChange}
              />
            </div>
            <div className="form_control">
              <label>Company Logo:</label>
              <input type="file" accept="image/*" onChange={handleFileChange} />
            </div>
          </div>
          <div className="createJobBtn">
            <button type="submit">Create Job</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobForm;
