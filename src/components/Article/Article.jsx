import React from 'react';
import './Article.css';
import Button from 'components/Button'


function Article({title,extract,pageid}){
    return(
        <div className = "Article" >
            <h1>{title}</h1>
            <p>{extract}</p>
            <Button href = {`/article/${pageid}`}>See the Article</Button>
        </div>
    )
}

export default React.memo(Article)