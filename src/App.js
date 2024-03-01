import React from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import { JobPosting } from './JobPosting';


function App(props) {
    return (
        <div>
            <JobPosting />
        {/* <header>
            <div>
            <h1></h1>
            </div>
        </header>
        
        <main>
            <div>
            </div>
        </main>

        <footer>
        </footer> */}
        </div>
    );
}
export default App;