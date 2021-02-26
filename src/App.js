import React from "react";
import Navbar from "./components/layout/Navbar";
import "./App.css";
import List_Container from "./components/List_Container";
import container from "./Styles/container.css";
import Search_Box from "./components/Search_Box.js";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Search_Box></Search_Box>
        <List_Container></List_Container>
      </div>
    </div>
  );
}

export default App;
