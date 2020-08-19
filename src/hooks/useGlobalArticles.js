import {useContext} from 'react';
import Context from 'context/ContextArticles';


export default function useGlobalArticles(){
    const {articles} = useContext(Context);

    return {articles}
}