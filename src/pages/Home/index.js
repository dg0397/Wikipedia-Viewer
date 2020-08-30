import React from 'react';
import SearchBar from 'components/SearchBar/SearchBar';
import { Helmet } from 'react-helmet';

export default function Home(){
    console.log("Hey")
    return(
        <>
            <Helmet>
                <title>
                    Home | Wikipedia Viewer
                </title>
                <meta
                    name="description"
                    content="Wikipedia Article Searcher"
                />
            </Helmet>
            <SearchBar />
        </>
    )
}