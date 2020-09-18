import {BASE,API_URL_ARTICLES} from 'services/settings';

export default function getArticles(setState,setStatus,errorController,{keyword, page = 0, limit = 15}){
    setStatus(true)
    fetch(`${BASE}${API_URL_ARTICLES}&gsrlimit=${limit}&gsroffset=${page*limit}&gsrsearch=${keyword}`)
        .then(data => data.json())
        .then(jsonResponse =>{
            if(!jsonResponse.query){
              setStatus(false);
              throw console.log('There is an Error');
            } //If does't receive a valid answer

            const {pages} = jsonResponse.query;
            console.log(Object.values(pages))

            if(Object.values(pages).length === 0){
              setStatus(false);
              throw console.log('There is an Error');
            } //If does't receive articles return

            const articles = Object.values(pages).map( article => {
                const {pageid,title,thumbnail,extract} = article;
                const {source:thumbnailSource} = thumbnail ? thumbnail : "" ;
                return {pageid,title,thumbnailSource,extract}

            });

            console.log("Fetching");
            if(page === 0 ){
                setState(articles);
              }else{
                setState(prevState => prevState.concat(articles))
              }

            setStatus(false);
            errorController(false);

        }).catch(err => {
          console.log(err)
          errorController(true)
        })
}