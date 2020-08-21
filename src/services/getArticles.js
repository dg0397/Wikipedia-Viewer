import {BASE,API_URL_ARTICLES} from 'services/settings';

export default function getArticles(setState,setStatus,{keyword, page = 0, limit = 10}){
    setStatus(true)
    fetch(`${BASE}${API_URL_ARTICLES}&gsrlimit=${limit}&gsroffset=${page*limit}&gsrsearch=${keyword}`)
        .then(data => data.json())
        .then(jsonResponse =>{
            const {pages} = jsonResponse.query;
            console.log(Object.values(pages))
            const articles = Object.values(pages).map( article => {
                const {pageid,pageimage,title,original,thumbnail,extract} = article;
                const {source:originalSource} = original ? original : "";
                const {source:thumbnailSource} = thumbnail ? thumbnail : "" ;
                return {pageid,pageimage,title,originalSource,thumbnailSource,extract}
            } );
            console.log("Fetching");
            
            if(page === 0 ){
                setState(articles)
              }else{
                setState(prevState => prevState.concat(articles))
              }

            setStatus(false)
        })
}