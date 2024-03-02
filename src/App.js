import React from 'react'; //import React Component
import Homepage from './Homepage';
import SavedJobs from './SavedJobs';
import Profile from './Profile';
import NavigationBar from './NavigationBar';
import { JobPosting } from './JobPosting';
import { Routes, Route, Navigate } from 'react-router-dom';


function App(props) {
    return (
        <div>
          <main className="container">
            <div className="row">
              <div className="col-3">
                <NavigationBar />
              </div>
              <div className="row">
                <Routes>
                    <Route path="/savedJobs" element={<SavedJobs />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/homepage" element={<Homepage />} />

                    <Route path="/jobPosting" element={<JobPosting />} />
                    
                    <Route path="*" element={<Navigate to="homepage" />} />
                </Routes>
              </div>
            </div>
          </main>
    
          <footer className="container">
            <small>Evan Chang, Sara Duan, Roshan Mettupalli, Megan Pham</small>
          </footer>
        </div>
      );
}

export default App;
