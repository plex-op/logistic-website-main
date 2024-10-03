import React from "react";
import Home from "../components/home/Home";
import ClientLogos from "../components/home/ClientLogo";
import AboutUs from "../components/home/AboutUs";
import Categories from "../components/home/Categories";
import WhyUs from "../components/home/WhyUs";
import ContactForm from "../components/home/ContactForm";
import Sample from "../components/Sample";
import Products from "./products/Products";

const HomePage = () => {
  return (
    <>
      <Sample />
      <Home />
      <ClientLogos />
      <AboutUs />
      <Products />
      <Categories />
      <WhyUs />
      <ContactForm />
    </>
  );
};

export default HomePage;
