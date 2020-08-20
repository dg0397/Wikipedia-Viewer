import React, { Suspense } from 'react';
//import useGlobalArticles from 'hooks/useGlobalArticles';


import SpinnerArticleFull from 'components/ContentLoader/ArticleFullLoader';

import useSingleArticle from 'hooks/useSingleArticle';

const SingleDetail = React.lazy(
    () => import("components/SingleDetail/SingleDetail")
)

export default function Detail({params}){
    const {singleArticle,loadingArticle} = useSingleArticle(params)
    const {id} = params;

    console.log(singleArticle)
    return(
        <Suspense fallback = {<SpinnerArticleFull/>} >
            {loadingArticle ? <SpinnerArticleFull/> : <SingleDetail article = {singleArticle} id = {id}/> }
        </Suspense>
    )
}