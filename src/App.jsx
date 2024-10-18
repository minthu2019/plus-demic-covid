import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import HowHelp from "./components/howhelp/HowHelp";
import Uses from "./components/uses/Uses";
import Footer from "./components/footer/Footer";
import Blog from "./components/blog/Blog";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowHelp />
      <Uses />
      <Blog />
      <Footer/>
    </main>
  );
};

export default App;
