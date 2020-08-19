import React from 'react';
import Article from 'components/Article'
export default function ArticleList({articles}){
    return(
        <div>
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