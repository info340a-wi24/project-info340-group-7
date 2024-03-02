import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import { Review } from './Review';


function JobPosting(props) {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="index.html">Connect</a>
                        
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        
                        <div className="collapse navbar-collapse" id="navbarNav">
                        
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link" href="index.html">Home</a>
                                </li>
                        
                                <li className="nav-item">
                                    <a className="nav-link" href="savedJobs.html">My Jobs</a>
                                </li>
                        
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                    
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                            </ul>
                    
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="profile.html">
                                        <i className="bi bi-person-fill"></i> Profile
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
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
                        <p>
                        
                        Overview:
                        Join our team as an entry-level Barista and embark on a journey of crafting exceptional coffee experiences for our customers. As a vital member of our team, you will be responsible for preparing and serving a variety of coffee beverages while providing friendly and efficient customer service. This role offers an excellent opportunity for individuals who are passionate about coffee and eager to start their career in the hospitality industry.

                        Responsibilities:

                        Greet and interact with customers in a warm and friendly manner.
                        Take customer orders accurately and efficiently, ensuring attention to detail.
                        Prepare and serve a variety of coffee beverages, including espresso, cappuccino, latte, and specialty drinks, following standardized recipes and techniques.
                        Operate coffee brewing equipment, espresso machines, and other tools efficiently and safely.
                        Maintain cleanliness and organization of the coffee bar, including brewing equipment, workstations, and dining areas.
                        Restock coffee beans, syrups, milk, and other supplies as needed.
                        Follow food safety and sanitation guidelines to ensure the quality and safety of products.
                        Handle cash and electronic payments accurately and responsibly.
                        Work collaboratively with team members to ensure smooth operations and exceptional customer service.
                        Assist with other tasks and duties as assigned by management.
                        Qualifications:

                        High school diploma or equivalent preferred.
                        Previous experience in a customer service or food service role is a plus but not required; training will be provided.
                        Passion for coffee and a willingness to learn about different coffee varieties, brewing methods, and flavor profiles.
                        Strong communication and interpersonal skills.
                        Ability to work in a fast-paced environment and multitask effectively.
                        Detail-oriented with a focus on quality and consistency.
                        Ability to stand for extended periods and lift up to 30 pounds.
                        Flexibility to work mornings, evenings, weekends, and holidays as needed.
                        Benefits:

                        Competitive hourly wage.
                        Opportunities for advancement and career growth.
                        Training and development programs.
                        Employee discounts on food and beverages.
                        Friendly and supportive work environment.
                        Join our team and become part of a dynamic and passionate community dedicated to creating memorable coffee experiences for our customers. Apply now to start your journey as an entry-level Barista with us!
                        </p>
                    </div>
                    </section>
                    <section className="review">
                        <h1>Review:</h1>
                        <p>Worked here before? Leave a Review!</p>
                        <Review />
                    </section>
                </div>
            </main>
        </div>
    );
}
export { JobPosting };