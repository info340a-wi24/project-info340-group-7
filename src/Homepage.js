import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { getDatabase, ref, onValue, off } from 'firebase/database';
import SearchBar from './SearchBar';
import JobListing from './JobListing';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {db} from './index';

function Homepage() {
  const [jobs, setJobs] = useState([]);
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

  useEffect(() => {
    const jobsRef = ref(db, 'jobs');
    console.log(jobsRef);
    onValue(jobsRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      if (data) {
        const jobArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));
        setJobs(jobArray);
      }
    });

    return () => {
      off(jobsRef);
    };
  }, []);

  return (
    <div>
    <div class="left-section">
  <ul class="list-unstyled">
    <li><a class="text-decoration-none text-white" href={`https://ung.edu/career-services/online-career-resources/interview-well/tips-for-a-successful-interview.php`}>Interview Prep</a></li>
    <li><a class="text-decoration-none text-white" href={`https://www.overleaf.com/latex/templates/tagged/cv`}>Resume Builder</a></li>
    <li><a class="text-decoration-none text-white" href={`https://www.theforage.com/blog/basics/career-aptitude-test`}>Career Apitude Test</a></li>
  </ul>
</div>
    <div className="right-section">
      <h2>Job Listings</h2>
      <SearchBar onSearch={onSearch} suggestSearch={suggestSearch} />
      {jobs.map(job => (
          <JobListing
            key={job.id}
            id={job.id}
            title={job.title}
            logoSrc={job.logoSrc}
            company={job.company}
            location={job.location}
            pay={job.pay}
            qualifications={job.qualifications}
            posted={job.posted}
          />
        ))}
      {/* <JobListing
        id="0"
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
      /> */}
    </div>
    </div>


  );
}

export default Homepage;
