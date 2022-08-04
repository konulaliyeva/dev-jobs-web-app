import React from "react";
import App from "./App";
import JobDetails from "./JobDetails";
import { Routes, Route } from "react-router-dom";

function Main (){
    return (
        <Routes>
            <Route path="" element = {<App />}/>
            <Route path="/vacancy" element={<JobDetails />}/>
        </Routes>
    )
}

export default Main;