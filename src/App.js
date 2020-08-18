import React from 'react';
import './App.css';

import Header from 'components/Header';
import Footer from 'components/Footer';

import Home from "pages/Home";
import SearchResults from "pages/SearchResults";
import Detail from "pages/Detail"

import { Route } from 'wouter';


function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Header/>
        <Route path = "/" component ={Home} />
        <Route path = "/search/:keyword" component ={SearchResults} />
        <Route path = "/:id" component ={Detail} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
