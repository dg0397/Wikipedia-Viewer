import React from 'react';
import './App.css';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import Home from "pages/Home";
import SearchResults from "pages/SearchResults";
import Detail from "pages/Detail"

import { Route } from 'wouter';
import { ArticlesContextProvider } from 'context/ContextArticles';


function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Header/>
        <ArticlesContextProvider>
          <div className = 'Main'>
            <Route path = "/" component ={Home} />
            <Route path = "/search/:keyword" component ={SearchResults} />
            <Route path = "/article/:id" component ={Detail} />
          </div>
        </ArticlesContextProvider>
        <Footer />
      </div>
    </div>
  );
}

export default App;
