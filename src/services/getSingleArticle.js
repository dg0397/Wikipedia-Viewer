import {BASE,API_URL_SINGLE_ARTICLE} from 'services/settings';

export default function getSingleArticle(setState,setStatus,{id}){
    setStatus(true)
    fetch(`${BASE}${API_URL_SINGLE_ARTICLE}&pageids=${id}`)
        .then(data => data.json())
        .then(jsonResponse =>{
            const {pages} = jsonResponse.query;
            console.log(Object.values(pages))
            const article = Object.values(pages).map( article => {
                const {pageid,title,thumbnail,extract} = article;
                const {source:thumbnailSource} = thumbnail ? thumbnail : "" ;
                return {pageid,title,thumbnailSource,extract}
            } );
            console.log("FetchingArticle");
            setState(article)
            setStatus(false)
        })
}