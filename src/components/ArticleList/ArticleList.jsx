import React from 'react';
import Article from 'components/Article/Article'
import './ArticleList.css'

export default function ArticleList({articles}){
    return(
        <div className = "ArticleList" >
            {
                articles.map( ({title,extract,pageid}) => {
                    return(
                        <Article 
                        title = {title}
                        extract = {extract}
                        pageid = {pageid}
                        key = {pageid} />
                    )
                })
            }
        </div>
    )
}