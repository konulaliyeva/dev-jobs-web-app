import React, { useEffect, useState } from "react";
import JobItem from "./JobItem";


function HomePageBody(){
    const [companyData, setCompanyData] = useState([]);
  useEffect(() => {
    const fetchCompanyData = async () => {
      const data = await fetch("./data.json").then((res) => res.json());

      setCompanyData(data);
    };
    fetchCompanyData();
  }, []);
  console.log(companyData);
    return (
        <JobItem companyData = {companyData}/>
    )
}

export default HomePageBody;
