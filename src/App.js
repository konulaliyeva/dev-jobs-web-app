import React from "react";
import { Button } from "./components/Button";
import Header from "./components/Header";
import HomePageBody from "./components/HomePageBody";
import HeaderSearchForm from "./components/HeaderSearchForm";
function App() {
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

export default App;
