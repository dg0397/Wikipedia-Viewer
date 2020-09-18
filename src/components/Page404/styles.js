import styled from '@emotion/styled';

export const ErrorPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    margin-top:1rem;
    
    * {
        margin-bottom: .5rem ;
    }

`;

export const ErrorPageContainerIcon = styled.h2`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const ErrorPageIcon = styled.span`
    font-size: 4rem;
    font-style: normal;
    margin : 0;
`;

export const ErrorPageNumber = styled.h3`
    font-family: monospace;
    font-size: 5rem;
`
export const ErrorPageText = styled.p`
    font-size: 2rem;
    font-weight: 700;
`
export const ErrorPageDetail = styled.p`
    font-style: italic;
    font-weight: 400;
`

export const ErrorPageExample = styled.span`
    font-size: .8rem;
`
