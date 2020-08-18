import {useState,useEffect} from 'react';
import getArticles from 'services/getArticles';

export default function useArticles({keyword}){
    const [articles,setArticles] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        getArticles(setArticles,setLoading,{keyword})
    }, [keyword])
    
    return {articles,loading}
}