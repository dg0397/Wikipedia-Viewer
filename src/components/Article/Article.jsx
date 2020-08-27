import React from 'react';
import './Article.css';
import { Link } from 'wouter';

function Article({title,extract,pageid}){
    return(
        <div className = "Article" >
            <h1>{title}</h1>
            <p>{extract}</p>
            <Link to = {`/article/${pageid}`}>See the Article</Link>
        </div>
    )
}

export default React.memo(Article)