import React from "react";
import { Helmet } from "react-helmet";

const CardView = ({ job, onClick }) => {
  return (
    <div className="job-card" onClick={onClick}>
      <Helmet>
        <meta property="og:title" content={job.title} />
        <meta property="og:description" content={job.function} />
        <meta property="og:image" content={job.companyLogo} />
      </Helmet>
      <div className="card-header">
        <img src={job.companyLogo} alt={job.title} className="logo" />
      </div>
      <div className="card-body">
        <h3 className="card-title">
          <b>Title : </b>
          {job.title}
        </h3>
        <p className="card-text">
          <b>Job Function : </b>
          {job.function}
        </p>
        <p className="card-text">
          <b>Job Type : </b>
          {job.type}
        </p>
        <p className="card-text">
          <b>Experience : </b>
          {job.experience}
        </p>
        <p className="card-text">
          <b>Salary : </b>
          {job.salary}
        </p>
        <p className="card-text">
          <b>Job Expires by : </b>
          {job.expires}
        </p>
        <p className="card-text">
          <b>Job Skills : </b>
          {job.skills}
        </p>
        <p className="card-text">
          <b>Job location : </b>
          {job.location}
        </p>
      </div>
    </div>
  );
};

export default CardView;
