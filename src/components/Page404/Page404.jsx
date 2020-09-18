import React from 'react';
import { Helmet } from 'react-helmet';
import { ErrorPageContainer, ErrorPageContainerIcon, ErrorPageIcon, ErrorPageNumber, ErrorPageText, ErrorPageDetail ,  ErrorPageExample} from './styles'
import ButtonComponent from 'components/Button';

export default function Page404(){
    return(
       <>
            <Helmet>
                <title>Page not found</title>
            </Helmet>
            <ErrorPageContainer>
                <ErrorPageContainerIcon>
                    <ErrorPageIcon>
                        <span aria-label = "Sad face icon" role = "img"  >☹️</span>
                    </ErrorPageIcon>
                </ErrorPageContainerIcon>
                <ErrorPageNumber>404</ErrorPageNumber>
                <ErrorPageText>
                    PAGE NOT FOUND!
                </ErrorPageText>
                <ErrorPageDetail>
                    Try to search with other word!
                    <ErrorPageExample>(E.G.: JavaScript...)</ErrorPageExample>
                </ErrorPageDetail>
                <ButtonComponent href = '/'> Go Back to Home</ButtonComponent>
            </ErrorPageContainer>
       </>
    )
}