import styled from '@emotion/styled'
import {Link as LinkWouter} from 'wouter'

export const Link = styled(LinkWouter)`
    padding: .4rem;
    text-align: center;
    font-size: 1rem;
    text-decoration: none;
    font-weight: 300;
    text-transform: uppercase;
    color: white;
    border-radius: 5px;
    border:none;
    box-shadow: 0 5px rgba(0, 0, 0, 0.2);
    transition: all 0.25s ease-in;
    background-color: hsl(197, 55%, 58%);
    :hover{
        background-color: hsl(197, 55%, 62%) ;
    }
    ${ props => {
        if(props.type === 'backButton'){
            return `
            grid-area: backBtn;
            `
        }
    }}
`

export const Button = styled.button`
    padding: .4rem;
    text-align: center;
    font-weight: 300;
    text-transform: uppercase;
    color: white;
    background-color: hsl(154, 59%, 51%) ;
    border-radius: 0 5px 5px 0;
    border:none;
    box-shadow: 0 5px rgba(0, 0, 0, 0.2);
    transition: all 0.25s ease-in; 

    :hover{
        background:hsl(154, 59%, 56%);
        cursor: pointer;
    }

    :active{
        background: hsl(154, 59%, 41%);
    }

    :focus{
        outline: none;
    }

`