import React from 'react';
import FileUpload from './components/FileUpload';
import { BrowserRouter, Route } from "react-router-dom";

import './App.css';

const App = () => (
  
        <BrowserRouter>
          <div className='container mt-4'>          
            <Route path="/" exact component={FileUpload} />
          </div>
        </BrowserRouter>      
  
);

export default App;
