import React from 'react';
import './App.css';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import Home from "pages/Home";
import Detail from "pages/Detail"
import Page404 from 'pages/ErrorPage';

import { Route, Switch } from 'wouter';
import { ArticlesContextProvider } from 'context/ContextArticles';
import SearchResults from 'pages/SearchResults';


function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Header />
        <ArticlesContextProvider>
          <div className='Main'>
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/search/:keyword" component={SearchResults} />
              <Route path="/article/:id" component={Detail} />
              <Route
                path='/:rest*'
                component = {Page404} 
              />
            </Switch>
          </div>
        </ArticlesContextProvider>
        <Footer />
      </div>
    </div>
  );
}

export default App;
