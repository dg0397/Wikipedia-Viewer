import React from 'react';
import './SingleDetail.css'
import { Link } from 'wouter';

export default function Detail({id,article}){
    const {title,extract,thumbnailSource} = article;
    const keyword = localStorage.getItem("keyword");
    return(
        <div className = "SingleDetail" >
            <h1>{title}</h1>
            <p>{extract}</p>
            {   thumbnailSource && 
                <div className = "container_img">
                    <img src = {thumbnailSource} alt = {title} /> 
                </div>
            }
            <a href={`https://en.wikipedia.org/?curid=${id}`} target = "_blank" rel="noopener noreferrer" id = 'original'>Go to Original Article</a>
            <Link to = {`/search/${keyword}`} id = 'go_back'>Go back to the List</Link>
        </div>
    )
}