import React, { useRef, useEffect } from 'react';
import useArticles from 'hooks/useArticles';

import ArticleList from 'components/ArticleList/ArticleList';
import SearchBar from 'components/SearchBar/SearchBar';

import SpinnerArticles from 'components/ContentLoader/ArticleLoader';
import useNearScreen from 'hooks/useNearScreen';
import { Helmet } from 'react-helmet';

export default function SearchResults({ params }) {
    const { keyword } = params;
    //console.log(keyword)
    const { articles, loading, loadingNextPage, setPages } = useArticles({ keyword });
    //console.log(articles)
    const externalRef = useRef();
    const { isNearScreen } = useNearScreen({ externalRef: loading ? null : externalRef })



    useEffect(() => {
        console.log(isNearScreen);
        if (isNearScreen) setPages(preState => preState + 1);
    }, [isNearScreen, setPages]);

    //console.log(loadingNextPage);
    //
    //console.log(page)
    const title = articles ? `${articles.length} results for ${decodeURI(keyword)}` : ``;

    if (loading) {
        return (
            <>
                <Helmet>
                    <title>
                        Loading...
                    </title>
                </Helmet>
                <SpinnerArticles />
            </>
        )
    }
    return (
        <>
            {
                loading ?
                    <SpinnerArticles /> :
                    <>
                        <Helmet>
                            <title>
                                {title} | Wikipedia Viewer
                            </title>
                            <meta
                                name="description"
                                content={title}
                            />
                            <meta
                                name="rating"
                                content="General"
                            />
                        </Helmet>
                        <SearchBar />
                        <h2>Search Results for: {decodeURI(keyword)}...</h2>
                        <ArticleList articles={articles} />
                        <div ref={externalRef}></div>
                        {loadingNextPage && <SpinnerArticles />}
                    </>
            }
        </>

    )
}