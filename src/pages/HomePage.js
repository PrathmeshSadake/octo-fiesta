import React from "react";
import Header from "../components/Header";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Places from "../components/Places";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Places />
      <CTA />
      <Footer />
    </div>
  );
};

export default HomePage;
