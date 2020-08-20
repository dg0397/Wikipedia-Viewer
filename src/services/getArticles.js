import {BASE,API_URL_ARTICLES} from 'services/settings';
export default function getArticles(setState,setStatus,{keyword}){
    setStatus(true)
    fetch(`${BASE}${API_URL_ARTICLES}&gsroffset=0&gsrsearch=${keyword}`)
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
            setState(articles)
            setStatus(false)
        })
}