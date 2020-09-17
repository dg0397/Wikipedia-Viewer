import styled from '@emotion/styled'

export const Form = styled.form`
    display: flex;
    justify-content:  center;
    width: 100%;
    margin-bottom: 1rem ;
`

export const Input = styled.input`
    height: 2rem;
    padding: .4rem;
    text-align: start;
    -webkit-appearance: textfield;
    background-color: white;
    -webkit-rtl-ordering: logical;
    cursor: text;
    color:#1c1c1c;
    border:none;
    border-radius: 5px 0 0 5px;
    box-sizing: border-box;
    box-shadow: 0 5px rgba(0, 0, 0, 0.2);

    :focus{
        outline:none
    }
`