import React from 'react';
import logo from "../assets/logo.png";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
    <Helmet>
      <title>Home - Follow the River</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Helmet>
    <header>
      <img src={ logo } alt="Follow the River App"/>
      <h1>Follow the River App</h1>
      <div>
        <h2>The companion app for Up & Down the River</h2>
      </div>
    </header>
    </>
  );
}

export default Home;