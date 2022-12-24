import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const ContactPage = () => {
  return (
    <div>
      <Header header='Contact Page' />
      <Link to='/'>Click to view our home page</Link>
      <Link to='about'>Click to view our about us page</Link>
    </div>
  );
};

export default ContactPage;
