import React from 'react';
import { Helmet } from 'react-helmet';
import 'components/Page404/Page404.css';

export default function Page404(){
    return(
       <>
            <Helmet>
                <title>Page not found</title>
            </Helmet>
            <h1>PAGE NOT FOUND! :( 404... </h1>
       </>
    )
}