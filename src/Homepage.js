import React from 'react';
import SearchBar from './SearchBar';
import JobListing from './JobListing';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function Homepage() {
  const onSearch = () => {};
  
  function suggestSearch(keyword) {
    document.getElementById('searchInput').value = keyword;
    searchJobs();
  }

  function searchJobs() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const jobListings = document.querySelectorAll('.job-listing');
  
    jobListings.forEach((listing) => {
      const title = listing.dataset.title.toLowerCase();
  
      if (title.includes(searchTerm)) {
        listing.style.display = 'block';
      } else {
        listing.style.display = 'none';
      }
    });
  }

  return (
    <div className="right-section">
      <SearchBar onSearch={onSearch} suggestSearch={suggestSearch} />

      <JobListing
        title="Barista"
        logoSrc="../../assets/logo.png"
        company="District Market UW West Campus"
        location="Seattle, WA"
        pay="$20,000 - $30,000 per year"
        qualifications="High School Diploma"
        posted="yesterday"
      />

     <JobListing
        title="Barista"
        logoSrc="/project-info340-group-7/project-draft/assets/apple.png"
        company="District Market UW West Campus"
        location="Seattle, WA"
        pay="$20,000 - $30,000 per year"
        qualifications="High School Diploma"
        posted="yesterday"
      />

     <JobListing
        title="Barista"
        logoSrc="/project-info340-group-7/project-draft/assets/apple.png"
        company="District Market UW West Campus"
        location="Seattle, WA"
        pay="$20,000 - $30,000 per year"
        qualifications="High School Diploma"
        posted="yesterday"
      />

     <JobListing
        title="Barista"
        logoSrc="/project-info340-group-7/project-draft/assets/apple.png"
        company="District Market UW West Campus"
        location="Seattle, WA"
        pay="$20,000 - $30,000 per year"
        qualifications="High School Diploma"
        posted="yesterday"
      />
    </div>
  );
}

export default Homepage;