import React from 'react';
import './SingleDetail.css'
import Button from 'components/Button'
import Hyperlink from 'components/HyperlinkComponent'

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
            <Hyperlink href={`https://en.wikipedia.org/?curid=${id}`} type = 'fullArticleButton' >Go to Original Article</Hyperlink>
            <Button href = {`/search/${keyword}`} type = 'backButton'>Go back to the List</Button>
        </div>
    )
}