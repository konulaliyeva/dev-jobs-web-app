import React from "react";
import { Button } from "./components/Button";
import HomePageBody from "./components/HomePageBody";
function App() {
  return (
    <div className="App">
      <HomePageBody />
      <div style={{transform:'translateX(43%)'}} className="mb-5 mt-4">
      <Button>Load More</Button>
      </div>
    </div>
  );
}

export default App;
