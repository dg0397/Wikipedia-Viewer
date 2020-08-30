import {BASE,API_URL_ARTICLES} from 'services/settings';

export default function getArticles(setState,setStatus,{keyword, page = 0, limit = 15}){
    setStatus(true)
    fetch(`${BASE}${API_URL_ARTICLES}&gsrlimit=${limit}&gsroffset=${page*limit}&gsrsearch=${keyword}`)
        .then(data => data.json())
        .then(jsonResponse =>{
            const {pages} = jsonResponse.query;
            console.log(Object.values(pages))
            const articles = Object.values(pages).map( article => {
                const {pageid,title,thumbnail,extract} = article;
                const {source:thumbnailSource} = thumbnail ? thumbnail : "" ;
                return {pageid,title,thumbnailSource,extract}
            });
            console.log("Fetching");
            if(page === 0 ){
                setState(articles)
              }else{
                setState(prevState => prevState.concat(articles))
              }

            setStatus(false)
        })
}