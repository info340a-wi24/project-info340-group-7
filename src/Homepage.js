import React, { useState } from 'react';
import SearchBar from './SearchBar';
import JobListing from './JobListing';


import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


function Homepage() {
 const [searchTerm, setSearchTerm] = useState('');


 function handleSearch(event) {
   setSearchTerm(event.target.value.toLowerCase());
 }


 function suggestSearch(keyword) {
   setSearchTerm(keyword.toLowerCase());
 }








 const jobListings = [
   {
     title: "Barista",
     logoSrc: "../../assets/logo.png",
     company: "District Market UW West Campus",
     location: "Seattle, WA",
     pay: "$20,000 - $30,000 per year",
     qualifications: "High School Diploma",
     posted: "yesterday"
   },
   {
     title: "Chef",
     logoSrc: "../../assets/apple.png",
     company: "Aladdin Gyro-Cery & Deli",
     location: "University District, WA",
     pay: "$30,000 - $40,000 per year",
     qualifications: "Some College",
     posted: "Posted 6 days ago"
   },
   {
     title: "Library Manager",
     logoSrc: "../../assets/microsoft.png",
     company: "UW Libraries",
     location: "Bothell, WA",
     pay: "$30,000 - $40,000 per year",
     qualifications: "Some College",
     posted: "Posted 2 days ago"
   },
   {
     title: "Content Creator",
     logoSrc: "../../assets/ebay.png",
     company: "UW Husky Union Building",
     location: "Seattle, WA",
     pay: "$20,000 - $30,000 per year",
     qualifications: "High School Diploma",
     posted: "Posted 4 days ago"
   },
   {
     title: "Janitor",
     logoSrc: "../../assets/walmart.jpeg",
     company: "UW Health Sciences Department",
     location: "Seattle, WA",
     pay: "$20,000 - $30,000 per year",
     qualifications: "High School Diploma",
     posted: "Posted last week"
   },
   {
     title: "Electrician",
     logoSrc: "../../assets/logo.png",
     company: "UW Facilities",
     location: "Tacoma, WA",
     pay: "$30,000 - $40,000 per year",
     qualifications: "Some College",
     posted: "Posted 2 weeks ago"
   },
   {
     title: "Electrician",
     logoSrc: "../../assets/microsoft.png",
     company: "UW Facilities",
     location: "Seattle, WA",
     pay: "$30,000 - $40,000 per year",
     qualifications: "Some College",
     posted: "Posted 2 weeks ago"
   },
   {
     title: "Electrician",
     logoSrc: "../../assets/ebay.png",
     company: "UW Facilities",
     location: "Bothell, WA",
     pay: "$30,000 - $40,000 per year",
     qualifications: "Some College",
     posted: "Posted 2 weeks ago"
   },
 ];


 return (
   <div>
     <div className="left-section">
       <ul className="list-unstyled">
         <li><a className="text-decoration-none text-white" href="#">Interview Prep</a></li>
         <li><a className="text-decoration-none text-white" href="#">Resume Builder</a></li>
         <li><a className="text-decoration-none text-white" href="#">Job Seeker Guidance</a></li>
         <li><a className="text-decoration-none text-white" href="#">Effective Networking Tips</a></li>
       </ul>
     </div>
     <div className="right-section">
       <h2>Job Listings</h2>
       <SearchBar onSearch={handleSearch} suggestSearch={suggestSearch} />


       {jobListings
         .filter(job => job.title.toLowerCase().includes(searchTerm))
         .map(job => (
           <JobListing
             title={job.title}
             logoSrc={job.logoSrc}
             company={job.company}
             location={job.location}
             pay={job.pay}
             qualifications={job.qualifications}
             posted={job.posted}
           />
         ))}
     </div>
   </div>
 );
}


export default Homepage;

