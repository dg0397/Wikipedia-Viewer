import React, { useRef, useEffect } from 'react';
import useArticles from 'hooks/useArticles';

import ArticleList from 'components/ArticleList/ArticleList';
import SearchBar from 'components/SearchBar/SearchBar';

import SpinnerArticles from 'components/ContentLoader/ArticleLoader';
import useNearScreen from 'hooks/useNearScreen';

export default function SearchResults({params}){
    const {keyword} = params;
    //console.log(keyword)
    const {articles,loading,loadingNextPage,setPages,page} = useArticles({keyword});
    //console.log(articles)
    const externalRef = useRef();
    const {isNearScreen} = useNearScreen({externalRef : loading ? null : externalRef})

     

    useEffect(()=> {
       if(isNearScreen) setPages(preState => preState +1);
   },[isNearScreen,setPages]);

    console.log(loadingNextPage);
    console.log(isNearScreen);
    console.log(page)
    return(
        <>
            {
                loading ? 
                <SpinnerArticles /> :
                <>
                    <SearchBar />
                    <ArticleList  articles={articles} />
                    <div className = "viewfinder" ref = {externalRef}></div>
                    {loadingNextPage &&   <SpinnerArticles /> } 
                </>
            }
        </>
        
    )
}