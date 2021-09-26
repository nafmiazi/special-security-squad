import React from 'react';
import './Force.css'

const Force = (props) => {
    const{name, img, forceName, age, salary, country} = props.force;

    return (
        // cart of each security force
        <div className="col-lg-4 g-3">
            <div className="card h-100 p-3 bg-secondary border border-2 border-warning">
                <img src={img} className="card-img-to border border-2 border-warning rounded-circle d-block m-auto" width="120px" height="120px" alt="..." />

                <div className="card-body text-white custom-card">
                    <p className="card-text lh-1"><span className="fw-bold">Name:</span> {name}</p>
                    <p className="card-text lh-1"><span className="fw-bold">Force Name:</span> {forceName}</p>
                    <p className="card-text lh-1"><span className="fw-bold">Age:</span> {age}y</p>
                    <p className="card-text lh-1"><span className="fw-bold">Country:</span> {country}</p>
                    <p className="card-text lh-1"><span className="fw-bold">Salary:</span> ${salary}</p>

                    <div className="d-grid gap-2 col-12 mx-auto">
                        <button onClick={()=> props.handleAddToForce(props.force)} className="btn btn-warning btn-sm fw-bold" type="button"><i className="fas fa-user-shield"></i> Add To Squad</button>
                    </div>
                    
                    <div className="mt-3 ms-3 text-center">
                        <i className="fab me-3 fa-facebook-f text-white icon i-1"></i>
                        <i className="fab me-3 fa-twitter text-info icon i-1"></i>
                        <i className="fab me-3 fa-instagram icon i-3"></i>
                        <i className="fab me-3 fa-linkedin-in text-white icon i-4"></i>
                        <i className="fab me-3 fa-whatsapp i-5"></i>
                    </div>  
                </div>
            </div>
        </div>     
    );
};

export default Force;