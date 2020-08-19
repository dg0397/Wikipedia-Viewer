import React from 'react';
import './SingleDetail.css'
import Article from 'components/Article/Article';
import { Link } from 'wouter';

export default function Detail({id,article}){
    const keyword = localStorage.getItem("keyword");
    return(
        <div className = "SingleDetail" >
            <Article {...article}/>
            <a href={`https://en.wikipedia.org/?curid=${id}`} target = "_blank" rel="noopener noreferrer" >Go to Original Article</a>
            <Link to = {`/search/${keyword}`} >Go back to the List</Link>
        </div>
    )
}