import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const AboutPage = () => {
  return (
    <div>
      <Header header='About' />
      <Link to='/'>Click to view our home page</Link>
      <Link to='contact'>Click to view our contact page</Link>
    </div>
  );
};

export default AboutPage;
