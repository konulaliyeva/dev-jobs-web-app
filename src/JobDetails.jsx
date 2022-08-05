import React, { useEffect, useState } from "react";
import Header from "./components/Utilities/Header";
import JobDetailsBody from "./components/JobDetailsPage/JobDetailsBody";
import JobDetailsFooter from "./components/JobDetailsPage/JobDetailsFooter";
import JobDetailsHeader from "./components/JobDetailsPage/JobDetailsHeader";
import { useParams } from "react-router-dom";

function JobDetails() {
  const [vacancy, setVacancy] = useState([]);
  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("../data.json").then((res) => res.json());
      setVacancy(data);
    };
    fetchData();
  }, []);
  let job = vacancy.find((job) => job.id === Number(params.id));
  return (
    <>
      <Header/>
      {
          job && <JobDetailsHeader job={job} />
      }
      {
          job && <JobDetailsBody  job={job} />
      }
      {
          job && <JobDetailsFooter  job={job} />
      }
      
    </>
  );
}
export default JobDetails;
