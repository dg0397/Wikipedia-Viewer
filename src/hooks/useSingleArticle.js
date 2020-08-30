import {useState,useEffect} from 'react';
import getSingleArticle from 'services/getSingleArticle';
import useGlobalArticles from './useGlobalArticles';

export default function useSingleArticle({id}){
    const {articles} = useGlobalArticles();
    
    const article = articles.find(singleArticle => singleArticle.pageid === Number(id));
    
    const [singleArticle,setSingleArticle] = useState(article);
    const [loadingArticle,setLoadingArticle] = useState(false);
    const [isError,setIsError] = useState(false)

    useEffect(()=>{
        if(!singleArticle){
            getSingleArticle(setSingleArticle,setLoadingArticle,setIsError,{id})
        }
    },[id,singleArticle])
    
    return {singleArticle,loadingArticle,isError}
}