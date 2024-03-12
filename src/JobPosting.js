import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import { Review } from './Review';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDatabase, ref, onValue, off } from 'firebase/database';
import {db} from './index';

function JobPosting(props) {
    const { id } = useParams();
    const [job, setJob] = useState(null);
  
    useEffect(() => {
        const jobRef = ref(db, `jobs/${id}`);
        console.log(jobRef);
    
        onValue(jobRef, (snapshot) => {
          const jobData = snapshot.val();
          setJob(jobData);
          console.log(jobData);
        });

        return () => {
          off(jobRef);
        };
      }, [id]);
  
    if (!job) {
      return <div>Loading...</div>;
    }
    return (
        <div>
            <main>
                <div className="job-posting-container">
                    <section className="basic-info-container">
                    <h1>Barista</h1>
                    <div className="overview">
                        <p>District Market UW West Campus - Seattle, WA - Posted 2 days ago</p>
                        <p>$20,000 - $30,000 | Part-Time</p>
                        <p>Application Deadline: March 19, 2024</p>
                    </div>
                    <div className="apply">
                        <button>
                        Apply
                        </button>
                        <button>
                        Save
                        </button>
                    </div>
                    </section>
                    <section className="job-description-container">
                    <h1>About the Job</h1>
                    <div>
                    <p>{job.company} - {job.location} - {job.posted}</p>
      <p>{job.pay} | {job.qualifications}</p>
                    </div>
                    </section>
                    <section className="review">
                        <h1>Review:</h1>
                        <p>Worked here before? Leave a Review!</p>
                        <Review companyId="District Market UW West Campus"/>
                    </section>
                </div>
            </main>
        </div>
    );
}
export { JobPosting };