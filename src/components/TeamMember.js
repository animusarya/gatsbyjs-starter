import React from 'react';

export default ({ name, designation, imageUrl }) => (
  <div className="col-md-3 col-sm-6 col-xs-12 col-6">
    <div className="single-team">
      <div className="team-thumb">
        <img src={imageUrl} alt="image" />
      </div>
      <h4>{name}</h4>
      <span>{designation}</span>
    </div>
  </div>
);
