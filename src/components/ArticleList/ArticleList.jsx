import React from 'react';
import Article from 'components/Article/Article'
import './ArticleList.css'

export default function ArticleList({articles}){
    return(
        <div className = "ArticleList" >
            {
                articles.map( ({title,extract,pageid}) => {
                    const newExtract = extract.slice(0,extract.indexOf('.')+1)
                    return(
                        <Article 
                        title = {title}
                        extract = {newExtract}
                        pageid = {pageid}
                        key = {pageid} />
                    )
                })
            }
        </div>
    )
}