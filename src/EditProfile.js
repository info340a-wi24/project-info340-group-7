import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export default function EditProfile(props) {
    return (
        <div class="editprofile">
            <main>
                <div className="container bg-white mt-5">
                    <div className="row">
                        <div className="col-md-3 border-right">
                            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                                <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="Profile Pic" />
                                <span className="font-weight-bold">Curious George</span>
                            </div>
                        </div>

                        <div className="col-md-5 border-right">
                            <div className="p-3 py-5">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h4 className="text-right">Profile Settings</h4>
                                </div>

                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <label className="labels">Name</label>
                                        <input type="text" className="form-control" placeholder="first name" value="" />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="labels">Surname</label>
                                        <input type="text" className="form-control" value="" placeholder="surname" />
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col-md-12">
                                        <label className="labels">Pronouns</label>
                                        <input type="text" className="form-control" placeholder="enter pronouns" value="" />
                                    </div>
                                    
                                    <div className="col-md-12">
                                        <label className="labels">Mobile Number</label>
                                        <input type="text" className="form-control" placeholder="enter phone number" value="" />
                                    </div>

                                    <div className="col-md-12">
                                        <label className="labels">E-mail ID</label>
                                        <input type="text" className="form-control" placeholder="enter e-mail" value="" />
                                    </div>

                                    <div className="col-md-12">
                                        <label className="labels">City</label>
                                        <input type="text" className="form-control" placeholder="enter city" value="" />
                                    </div>

                                    <div className="col-md-12">
                                        <label className="labels">State</label>
                                        <input type="text" className="form-control" placeholder="enter state" value="" />
                                    </div>

                                    <div className="col-md-12">
                                        <label className="labels">Country</label><input type="text" className="form-control" placeholder="enter country" value="" />
                                    </div>

                                    <div className="col-md-12">
                                        <label className="labels">Education</label>
                                        <input type="text" className="form-control" placeholder="enter education" value="" />
                                    </div>
                                </div>
                                    
                                <div className="mt-5 text-center">
                                    <a href="profile.html">
                                        <button className="btn btn-primary profile-button" type="button"><NavLink to="/profile" style={{ textDecoration: 'none', color: 'white' }}>Save Profile</NavLink></button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div className="p-3 py-5">
                                <div className="d-flex justify-content-between align-items-center experience">
                                    <span>Edit Experience</span>
                                </div>
                                <br />

                                <div className="col-md-12">
                                    <label className="labels">Experience</label>
                                    <input type="text" className="form-control" placeholder="experience" value="" />
                                </div> 
                                <br />

                                <div className="col-md-12">
                                    <label className="labels">Additional Details</label>
                                    <input type="text" className="form-control" placeholder="additional details" value="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
        </div>
    );
}