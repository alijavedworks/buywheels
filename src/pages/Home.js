import React from "react";
import "./home.css";
import HeaderBar from "../components/HeaderBar";
import AdCard from "../components/adCard";
const Home = () => {

  return (
    <div>
     <HeaderBar></HeaderBar>
      <h2>Ads</h2>
      <div className="homeContainer">
      <AdCard></AdCard>
      </div>
    </div>
  );
};

export default Home;
