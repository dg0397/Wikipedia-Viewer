import React from 'react';
import useArticles from 'hooks/useArticles';

import ArticleList from 'components/ArticleList/ArticleList';
import SearchBar from 'components/SearchBar/SearchBar';

import SpinnerArticles from 'components/ContentLoader/ArticleLoader';

export default function SearchResults({params}){
    const {keyword} = params;
    console.log(keyword)
    const {articles,loading} = useArticles({keyword});
    console.log(articles)
    return(
        <>
            {
                loading ? 
                <SpinnerArticles /> :
                <>
                    <SearchBar />
                    <ArticleList  articles={articles} />
                </>
            }
        </>
        
    )
}