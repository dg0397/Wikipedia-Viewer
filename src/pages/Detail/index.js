import React from 'react';


import  SpinnerFullArticle from 'components/ContentLoader/ArticleFullLoader';

import useSingleArticle from 'hooks/useSingleArticle';


import SingleDetail from 'components/SingleDetail/SingleDetail'
import { Redirect } from 'wouter';
import { Helmet } from 'react-helmet';

export default function Detail({params}){
    const {singleArticle,loadingArticle,isError} = useSingleArticle(params)
    const {id} = params;


    const title = singleArticle ? singleArticle.title : '';
    console.log(isError)

    if(loadingArticle){
        return(
            <>
                <Helmet>
                    <title>
                        Loading...
                    </title>
                </Helmet>
                <SpinnerFullArticle/> 
            </>
        )
    }

    if(isError) return <Redirect to = '/404'/>
    
    if(!singleArticle) return null;

    return(
        <>
            <Helmet>
                <title>
                    {title} | Wikipedia Viewer
                </title>
            </Helmet>
            <SingleDetail article = {singleArticle} id = {id}/> 
        </>       
    )
}