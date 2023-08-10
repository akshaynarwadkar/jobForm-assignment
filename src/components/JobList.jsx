import React, { useState } from "react";
import CardView from "./CardView";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import JobForm from "./jobForm";

const JobList = ({ jobs }) => {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleJobTitleClick = (job) => {
    setSelectedJob(job);
  };

  return (
    <Router>
      <div>
        <h2>Job List</h2>
        <div className="job-list">
          {jobs.map((job) => (
            <Link key={job.id} to={`/job/${job.id}`}>
              <CardView job={job} onClick={() => handleJobTitleClick(job)} />
            </Link>
          ))}
        </div>
        {selectedJob && <JobForm job={selectedJob} />}
      </div>
    </Router>
  );
};

export default JobList;
