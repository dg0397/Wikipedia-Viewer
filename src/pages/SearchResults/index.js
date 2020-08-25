import React, { useRef, useEffect } from 'react';
import useArticles from 'hooks/useArticles';

import ArticleList from 'components/ArticleList/ArticleList';
import SearchBar from 'components/SearchBar/SearchBar';

import SpinnerArticles from 'components/ContentLoader/ArticleLoader';
import useNearScreen from 'hooks/useNearScreen';

export default function SearchResults({params}){
    const {keyword} = params;
    //console.log(keyword)
    const {articles,loading,loadingNextPage,setPages} = useArticles({keyword});
    //console.log(articles)
    const externalRef = useRef();
    const {isNearScreen} = useNearScreen({externalRef : loading ? null : externalRef})

     

    useEffect(()=> {
        console.log(isNearScreen);
       if(isNearScreen) setPages(preState => preState +1);
   },[isNearScreen,setPages]);

    //console.log(loadingNextPage);
    //
    //console.log(page)
    return(
        <>
            {
                loading ? 
                <SpinnerArticles /> :
                <>
                    <SearchBar />
                    <h2>Search Results for: {decodeURI(keyword)}...</h2>
                    <ArticleList  articles={articles} />
                    <div ref = {externalRef}></div>
                    {loadingNextPage &&   <SpinnerArticles /> } 
                </>
            }
        </>
        
    )
}