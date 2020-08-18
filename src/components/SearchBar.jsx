import React,{useState} from 'react';
import { useLocation } from 'wouter';

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
        <form onSubmit = {handleSubmit}>
            <input type="text" value = {keyword} placeholder = "Enter something..." onChange = {handleInput} />
            <button>Search</button>
        </form>
    )
}