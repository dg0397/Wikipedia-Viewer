import {useState,useEffect} from 'react';
import getSingleArticle from 'services/getSingleArticle';

export default function useSingleArticle({id}){
    const [singleArticle,setSingleArticle] = useState([]);
    const [loadingArticle,setLoadingArticle] = useState(false);

    useEffect(()=>{
        getSingleArticle(setSingleArticle,setLoadingArticle,{id})
    },[id])
    
    return {singleArticle,loadingArticle}
}