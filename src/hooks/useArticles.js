import {useEffect,useContext} from 'react';
import getArticles from 'services/getArticles';
import Context from 'context/ContextArticles';


export default function useArticles({keyword}){
    const {articles,setArticles,setLoading,loading} = useContext(Context);
    const keywordToUse = keyword ? keyword : localStorage.getItem("keyword");
    useEffect(() => {
        getArticles(setArticles,setLoading,{keyword : keywordToUse});
        localStorage.setItem('keyword',keywordToUse);
        
    }, [keywordToUse,setArticles,setLoading])
    
    return {articles,loading}
}