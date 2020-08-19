import React from 'react';
import './Article.css';
import { Link } from 'wouter';

export default function Article({title,extract,pageid}){
    return(
        <Link to = {`/article/${pageid}`}>
            <div className = "Article" >
                <h1>{title}</h1>
                <p>{extract}</p>
            </div>
        </Link>
    )
}