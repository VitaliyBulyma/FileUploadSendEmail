import React from 'react';

const Nav = () => {
  function toggleNav (){
    document.getElementById("wrapper").classList.toggle("toggled");
  }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom mb-2">
        <button className="btn btn-primary" onClick={toggleNav} id="menu-toggle">Show/Hide Menu</button>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">Welcome, UserName! <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <button className="btn btn-primary">Logout</button>
            </li>
          </ul>
        </div>
      </nav>
    );

};

export default Nav;