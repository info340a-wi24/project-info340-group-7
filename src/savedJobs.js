import React from 'react';
import SJTableRow from './sjTableRow';
import TableInfo from './data/tableInfo.json';
import './index.css';

export default function SavedJobs() {
    return (
            <div className="savedJobs">
        <div className="container mt-4">
            <header className="bg-light p-3" style={{ width: '65%' }}>
                <h1>Your Saved Jobs</h1>
                <p>7 Jobs</p>
            </header>

            <div className="container mt-4">
                <table style={{ width: '65%' }}>
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {TableInfo.map((job, index) => (
                            <SJTableRow key={index} {...job} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    );
}