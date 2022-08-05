import React from "react";
import { Button } from "./components/Utilities/Button";
import Header from "./components/Utilities/Header";
import HomePageBody from "./components/HomePage/HomePageBody";
import HeaderSearchForm from "./components/HomePage/HeaderSearchForm";
function HomePage() {
  return (
    <div className="App">
      <Header />
      <HeaderSearchForm />
      <HomePageBody />
      <div className="mb-5 mt-5">
      <Button style={{marginLeft:'43%'}}primary>Load More</Button>
      </div>
    </div>
  );
}

export default HomePage;
