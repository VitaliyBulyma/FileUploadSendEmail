import React from 'react';
import FileUpload from './components/FileUpload';
import Nav from './components/Nav';
import SideBar from './components/SideBar';
import Card from './components/Reviews';

import { BrowserRouter, Route } from "react-router-dom";


import './App.css';


const App = () => (
  
        <BrowserRouter>

          <div className="d-flex" id="wrapper">
              <SideBar />
              <div id="page-content-wrapper">
                <Nav />
                <Route path="/" exact component={FileUpload} />
                
                <Route path="/reviews" exact component={Card} />
              </div>
          </div>
        </BrowserRouter>      
  
);

export default App;
