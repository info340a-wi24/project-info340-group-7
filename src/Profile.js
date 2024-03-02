import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export default function Profile(props) {
    return (
        <div class="profile">
            <main>
                <div className="container bg-white">
                    <div className="row">
                        <div className="p-3 pt-5 border-right">
                            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                                <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="Profile Pic" />
                                <span className="font-weight-bold">Curious George</span>
                                <span className="text-black-50">he/him</span>
                                <span className="text-black-50 pt-3">georgeiscurious@gmail.com</span>
                                <span className="text-black-50">(123) 456-7890</span>
                                <span className="text-black-50">Seattle, Washington, United States</span>
                                <span className="text-black-50 pt-3">Student at University of Washington</span>
                            </div>
                        </div>
                        <div className="p-3 pb-5 border-right">
                            <div className="mt-2 text-center">
                                <a href="edit-profile.html">
                                    <button className="btn btn-primary profile-button" type="button">Edit Profile</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
        </div>
    );
}