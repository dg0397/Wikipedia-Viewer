import styled from '@emotion/styled'

const generateStylesForType = props => {
    const {type} = props;

    if( type === 'simple'){
        return `
        color: aliceblue;
        letter-spacing: .1rem;
        `
    }else if( type === 'buttonLink' ){
        return `
        width: 100%;
        padding: .4rem;
        text-align: center;
        font-size: 1rem;
        text-decoration: none;
        font-weight: 300;
        text-transform: uppercase;
        color: white;
        background-color: hsl(197, 55%, 58%) ;
        border-radius: 5px;
        border:none;
        box-shadow: 0 5px rgba(0, 0, 0, 0.2);
        transition: all 0.25s ease-in;
        
        :hover{
            background-color: hsl(197, 55%, 62%) ;
        }
        `
    }else if( type === 'fullArticleButton' ){
        return `
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

        grid-area: fullBtn;
        background-color: hsl(154, 59%, 51%);
        :hover {
            background-color:hsl(154, 59%, 56%);
        }
        :active{
            background-color: hsl(154, 59%, 41%);
        }

        `
    }
}

export const Hyperlink = styled.a`
    ${generateStylesForType}
`