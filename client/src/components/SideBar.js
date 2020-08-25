import React from 'react';

const SideBar = () => {
    return (
        <div className="bg-light border-right" id="sidebar-wrapper">
        <div className="sidebar-heading bg-dark text-white">Review Tool</div>
        <div className="list-group list-group-flush">
          <a href="/dashboard.html" className="list-group-item list-group-item-action bg-light">Dashboard</a>
          <a href="/reviews" className="list-group-item list-group-item-action bg-light">Reviews</a>
          <a href="/" className="list-group-item list-group-item-action bg-light">Mailer</a>
  
        </div>
      </div>
    );

};

export default SideBar;