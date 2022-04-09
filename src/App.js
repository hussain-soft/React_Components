import React from "react";
import { Route, Routes } from "react-router-dom";
import { Nav } from "./components/Nav/Nav";
import { Home } from "./components/home/Home";
import { Services } from "./components/services/Services";
import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/services" exact element={<Services />}></Route>
        <Route path="/about" exact element={<About />}></Route>
        <Route path="/contact" exact element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
