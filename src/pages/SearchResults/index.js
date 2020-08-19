import React from 'react';
import useArticles from 'hooks/useArticles';
import ArticleList from 'components/ArticleList';

export default function SearchResults({params}){
    const {keyword} = params;
    console.log(keyword)
    const {articles,loading} = useArticles({keyword});
    console.log(articles)
    return(
        <ArticleList  articles={articles} />
    )
}