import React, {useContext} from "react";
import './App.css';
import Navigation from "./components/Navigation";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import {PageContext} from "./PageContext";

function App() {

  const [pages, setPages] = useContext(PageContext);

  const renderPage = () =>{
    if(pages.about){
      return <About/>
    }
    if(pages.skills){
      return <Skills/>
    }
    if(pages.projects){
      return <Project/>
    }
    if(pages.contact){
      return <Contact/>
    }
  }

  return (
    <>
      <div className="App">
        <div className="container">
          <Navigation/>
          {renderPage()}
        </div>
      </div>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </>
  );
}

export default App;
