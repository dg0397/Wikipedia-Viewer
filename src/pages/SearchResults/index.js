import React from 'react';
import useArticles from 'hooks/useArticles';

import ArticleList from 'components/ArticleList/ArticleList';
import SearchBar from 'components/SearchBar/SearchBar';

import SpinnerArticles from 'components/ContentLoader/ArticleLoader';

export default function SearchResults({params}){
    const {keyword} = params;
    console.log(keyword)
    const {articles,loading,loadingNextPage,setPages} = useArticles({keyword});
    console.log(articles)

    const handleNextPage = () => {
        setPages(prevState => prevState + 1)
    }
    console.log(loadingNextPage)
    return(
        <>
            {
                loading ? 
                <SpinnerArticles /> :
                <>
                    <SearchBar />
                    <ArticleList  articles={articles} />
                    <button onClick = {handleNextPage} >Get next page</button>
                    {loadingNextPage &&   <SpinnerArticles /> } 
                </>
            }
        </>
        
    )
}