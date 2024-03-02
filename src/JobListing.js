import React from 'react';

function JobListing({ title, logoSrc, company, location, pay, qualifications, posted }) {
  return (
    <div className="job-listing" data-title={title}>
      <div className="d-flex">
        <img src={logoSrc} alt="Logo" className="mr-3" />
        <div className="job-listing-items">
          <h5><a className="text-decoration-none text-black" href="#">{title}</a></h5>
          <p>{company}</p>
          <p>Location: {location}</p>
          <p>Pay: {pay}</p>
          <p>Minimum Qualifications: {qualifications}</p>
          <p>Posted {posted}</p>
        </div>
      </div>
    </div>
  );
}

export default JobListing;
