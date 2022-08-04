import React from "react";
import Header from "./components/Header";
import JobDetailsBody from "./components/JobDetailsPage/JobDetailsBody";
import JobDetailsFooter from "./components/JobDetailsPage/JobDetailsFooter";
import JobDetailsHeader from "./components/JobDetailsPage/JobDetailsHeader";
import './index.css'

function JobDetails (){

    return (
        <>
        <Header />
        <JobDetailsHeader />
        <JobDetailsBody/>
        <JobDetailsFooter/>
        </>
    )
}
export default JobDetails;