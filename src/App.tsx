import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComponent from "./Components/HomeComponent";
import JobOne from "./Components/JobOne";
import JobTwo from "./Components/JobTwo";
import JobThree from "./Components/JobThree";
import JobFour from "./Components/JobFour";
import JobFive from "./Components/JobFive";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent/>}/>
          <Route path="/jobone" element={<JobOne/>}/>
          <Route path="/jobtwo" element={<JobTwo/>}/>
          <Route path="/jobthree" element={<JobThree/>}/>
          <Route path="/jobfour" element={<JobFour/>}/>
          <Route path="/jobfive" element={<JobFive/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
