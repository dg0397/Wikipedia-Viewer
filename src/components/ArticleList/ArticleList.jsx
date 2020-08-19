import React from 'react';
import Article from 'components/Article/Article'
import './ArticleList.css'

export default function ArticleList({articles}){
    return(
        <div className = "ArticleList" >
            {
                articles.map( article => {
                    return(
                        <Article {...article} key = {article.pageid} />
                    )
                })
            }
        </div>
    )
}