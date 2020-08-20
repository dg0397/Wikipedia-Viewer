import React, { Suspense } from 'react';
import useGlobalArticles from 'hooks/useGlobalArticles';


import SpinnerArticleFull from 'components/ContentLoader/ArticleFullLoader';

const SingleDetail = React.lazy(
    () => import("components/SingleDetail/SingleDetail")
)

export default function Detail({params}){
    const {articles} = useGlobalArticles()
    const {id} = params;

    const article = articles.find(singleArticle => singleArticle.pageid === Number(id));
    console.log(articles)
    console.log(article)
    return(
        <Suspense fallback = {<SpinnerArticleFull/>} >
            <SingleDetail article = {article} id = {id}/>
        </Suspense>
    )
}