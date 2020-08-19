import React from 'react';
import SingleDetail from 'components/SingleDetail/SingleDetail'
import useGlobalArticles from 'hooks/useGlobalArticles'

export default function Detail({params}){
    const {articles} = useGlobalArticles()
    const {id} = params;

    const article = articles.find(singleArticle => singleArticle.pageid === Number(id));
    console.log(articles)
    console.log(article)
    return(
        <SingleDetail article = {article} id = {id}/>
    )
}