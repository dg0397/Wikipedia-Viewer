import {useEffect,useContext,useState} from 'react';
import getArticles from 'services/getArticles';
import Context from 'context/ContextArticles';

const INITIAL_PAGE = 0;

export default function useArticles({keyword}){
    const {articles,setArticles,setLoading,loading} = useContext(Context);
    const [isError,setIsError] = useState(false)

    const keywordToUse = keyword ? keyword : localStorage.getItem("keyword");

    useEffect(() => {
        getArticles(setArticles,setLoading,setIsError,{keyword : keywordToUse});
        localStorage.setItem('keyword',keywordToUse);
        
    }, [keywordToUse,setArticles,setLoading]);

    const [page,setPages] = useState(INITIAL_PAGE);
    const [loadingNextPage,setLoadingNextPage] = useState(false);

    useEffect(() => {
        if(page === INITIAL_PAGE) return;

        getArticles(setArticles,setLoadingNextPage,setIsError,{keyword : keywordToUse, page})
    },[page,keywordToUse,setArticles])
    
    return {articles,loading,loadingNextPage,setPages,isError}
}