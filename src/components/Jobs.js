import React from 'react';

const Jobs = () => (
  <div className="row">
    <div className="col-lg-4 col-md-6">
      <div className="single-price">
        <div className="top-sec d-flex justify-content-between">
          <div className="top-left">
            <h4>Standard</h4>
            <p>For the <br />individuals</p>
          </div>
          <div className="top-right">
            <h1>£199</h1>
          </div>
        </div>
        <div className="end-sec">
          <ul>
            <li>2.5 GB Free Photos</li>
            <li>Secure Online Transfer Indeed</li>
            <li>Unlimited Styles for interface</li>
            <li>Reliable Customer Service</li>
            <li>Manual Backup Provided</li>
          </ul>
          <button className="primary-btn price-btn mt-20">Purchase Plan</button>
        </div>
      </div>
    </div>
  </div>
);

export default Jobs;