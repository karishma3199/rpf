import React from 'react';
import {BrowserRouter , Route , Switch} from 'react-router-dom';
import './App.css';
import Menu from './Menu.js';
import Contact from './Contact.js';
import About from './About.js';
import Home from './Home.js';

function App() {
  return (
    <BrowserRouter>
    <div className="main_img">
     <Menu/>
     <Switch>
     <Route path="/" exact component ={Home} />
     <Route path="/about"  component ={About} />
     <Route path="/contact"  component ={Contact} />
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
