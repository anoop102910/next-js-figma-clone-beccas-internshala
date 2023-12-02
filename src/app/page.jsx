import React from "react";
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import About from "@/components/About";
import Features from "@/components/Features";
import Benefit from "@/components/Benefit";
import Review from "@/components/Review";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 to-white  ">
      <section className="max-w-[1000px] px-4 md:px-8 mx-auto">
        <Navbar />
        <Home />
        <About />
        <Features />
        <Benefit />
      </section>
      <section className="bg-secondary-200 px-4 md:px-32 text-white">
        <Review />
        <Footer/>
      </section>
    </div>
  );
}

export default App;
