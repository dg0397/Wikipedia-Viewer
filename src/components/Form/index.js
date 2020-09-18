import React, {useState} from 'react'
import { useLocation } from 'wouter';
import ButtonComponent from 'components/Button';
import { Form, Input } from './styles' 

export default function FormComponent() {
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

    return (
        <Form onSubmit = {handleSubmit}>
                <Input type="text" value = {keyword} placeholder = "Enter something..." onChange = {handleInput} />
                <ButtonComponent>Search</ButtonComponent>
        </Form>
    )
}
