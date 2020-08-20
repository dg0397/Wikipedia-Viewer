import React,{useState} from 'react';
import { useLocation } from 'wouter';
import './SearchBar.css'

export default function SearchBar(){
    const [keyword,setKeyword] = useState("");
    const [,setPath] = useLocation();

    const handleSubmit = e => {
        e.preventDefault()
        setPath(`/search/${keyword}`)
    }
    const handleInput = e => {
        const {value} = e.target
        setKeyword(value)
    }
    return(
        <div className = "App-form" >
            <form onSubmit = {handleSubmit}>
                <input type="text" value = {keyword} placeholder = "Enter something..." onChange = {handleInput} />
                <button>Search</button>
            </form>
            <div className = "Random-page" >
                <a href="https://en.wikipedia.org/wiki/Special:Random" target = "_blank" rel="noopener noreferrer" >Get a Ramdom Article</a>
            </div>
        </div>
    )
}