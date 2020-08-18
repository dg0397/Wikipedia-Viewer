import React from 'react';
import useArticles from 'hooks/useArticles';

export default function SearchResults({params}){
    const {keyword} = params;
    console.log(keyword)
    const {articles,loading} = useArticles({keyword});
    console.log(articles)
    return(
        <h1>
            {keyword}
        </h1>
    )
}