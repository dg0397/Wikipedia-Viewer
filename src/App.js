import React, { Suspense } from 'react';
import './App.css';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import Home from "pages/Home";
import Detail from "pages/Detail"

import { Route } from 'wouter';
import { ArticlesContextProvider } from 'context/ContextArticles';
import SpinnerArticles from 'components/ContentLoader/ArticleLoader';

const SearchResults = React.lazy(
  () => import("pages/SearchResults")
)

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Header />
        <ArticlesContextProvider>
          <div className='Main'>
            <Route path="/" component={Home} />
            <Suspense fallback={<SpinnerArticles />}>
              <Route path="/search/:keyword" component={SearchResults} />
            </Suspense>
            <Route path="/article/:id" component={Detail} />
          </div>
        </ArticlesContextProvider>
        <Footer />
      </div>
    </div>
  );
}

export default App;
