import React from "react";
import HomePage from "./HomePage";
import JobDetails from "./JobDetails";
import { Routes, Route } from "react-router-dom";

function Main (){
    return (
        <Routes>
            <Route path="" element = {<HomePage />}/>
            <Route path="/vacancy/:id" element={<JobDetails />}/>
        </Routes>
    )
}

export default Main;