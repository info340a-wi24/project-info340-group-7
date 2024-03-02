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
    <div>
    <div class="left-section">
  <ul class="list-unstyled">
    <li><a class="text-decoration-none text-white" href="#">Interview Prep</a></li>
    <li><a class="text-decoration-none text-white" href="#">Resume Builder</a></li>
    <li><a class="text-decoration-none text-white" href="#">Job Seeker Guidance</a></li>
    <li><a class="text-decoration-none text-white" href="#">Effective Networking Tips</a></li>
  </ul>
</div>
    <div className="right-section">
      <h2>Job Listings</h2>
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
        title="Chef"
        logoSrc="../../assets/apple.png"
        company="Aladdin Gyro-Cery & Deli"
        location="University District, WA"
        pay="$30,000 - $40,000 per year"
        qualifications="Some College"
        posted="Posted 6 days ago"
      />

     <JobListing
        title="Library Manager"
        logoSrc="../../assets/microsoft.png"
        company="UW Libraries"
        location="Bothell, WA"
        pay="$30,000 - $40,000 per year"
        qualifications="Some College"
        posted="Posted 2 days ago"
      />

     <JobListing
        title="Content Creator"
        logoSrc="../../assets/ebay.png"
        company="UW Husky Union Building"
        location="Seattle, WA"
        pay="$20,000 - $30,000 per year"
        qualifications="High School Diploma"
        posted="Posted 4 days ago"
      />

      <JobListing
        title="Janitor"
        logoSrc="../../assets/walmart.jpeg"
        company="UW Health Sciences Department"
        location="Seattle, WA"
        pay="$20,000 - $30,000 per year"
        qualifications="High School Diploma"
        posted="Posted last week"
      />

      <JobListing
        title="Barista"
        logoSrc="../../assets/apple.png"
        company="District Market"
        location="Seattle, WA"
        pay="$20,000 - $30,000 per year"
        qualifications="High School Diploma"
        posted="Posted 1 week ago"
      />

      <JobListing
        title="Electrician"
        logoSrc="../../assets/logo.png"
        company="UW Facilities"
        location="Tacoma, WA"
        pay="$30,000 - $40,000 per year"
        qualifications="Some College"
        posted="Posted 2 weeks ago"
      />

      <JobListing
        title="Electrician"
        logoSrc="../../assets/microsoft.png"
        company="UW Facilities"
        location="Seattle, WA"
        pay="$30,000 - $40,000 per year"
        qualifications="Some College"
        posted="Posted 2 weeks ago"
      />

      <JobListing
        title="Electrician"
        logoSrc="../../assets/ebay.png"
        company="UW Facilities"
        location="Bothell, WA"
        pay="$30,000 - $40,000 per year"
        qualifications="Some College"
        posted="Posted 2 weeks ago"
      />
    </div>
    </div>


  );
}

export default Homepage;
