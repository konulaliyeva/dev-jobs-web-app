import { React, useEffect, useState }  from "react";
import { Button } from "./components/Utilities/Button";
import Header from "./components/Utilities/Header";
import HeaderSearchForm from "./components/HomePage/HeaderSearchForm";
import JobItem from "./components/HomePage/JobItem";
function HomePage() {
  const [companyData, setCompanyData] = useState([]);
  const [state, setState] = React.useState({
    title: "",
    location:''
  })

  useEffect(() => {
    const fetchCompanyData = async () => {
      const data = await fetch("./data.json").then((res) => res.json());

      setCompanyData(data);
    };
    fetchCompanyData();
  }, []);

  const  handleSearchInput = (event)=>{
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value
    });
  
    let filtredVacancies= companyData.filter(vacancy=>vacancy.company.toLowerCase().includes(state[event.target.name]));
    filtredVacancies= companyData.filter(vacancy=>vacancy.position.toLowerCase().includes(state[event.target.name]));
    let locationVacancies= companyData.filter(vacancy=>vacancy.location.toLowerCase().includes(state[event.target.name]));
    setCompanyData(filtredVacancies)
    setCompanyData(locationVacancies)
  }

  return (
    <div className="App">
      <Header />
      <HeaderSearchForm handleSearchInput = {handleSearchInput} state={state} />
      <JobItem companyData={companyData}/>
      <div className="mb-5 mt-5">
      <Button style={{marginLeft:'43%'}}primary>Load More</Button>
      </div>
    </div>
  );
}

export default HomePage;
