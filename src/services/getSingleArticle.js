import {BASE,API_URL_SINGLE_ARTICLE} from 'services/settings';

export default function getSingleArticle(setState,setStatus,errorController,{id}){
    setStatus(true)
    fetch(`${BASE}${API_URL_SINGLE_ARTICLE}&pageids=${id}`)
        .then(data => data.json())
        .then(jsonResponse =>{
            const {pages} = jsonResponse.query ? jsonResponse.query : "" ;
            console.log(Object.values(pages))
            let article;
            console.log("Fetching single article")
            if(Object.values(pages)[0].missing === ''){

                console.log("Something was wrong");
                console.log('There ir an Error');
                setStatus(false);
                errorController(true);

            }else if(Object.values(pages)){

                article = Object.values(pages).map( singleArticle => {
                    const {pageid,title,thumbnail,extract} = singleArticle;
                    const {source:thumbnailSource} = thumbnail ? thumbnail : "" ;
                    return {pageid,title,thumbnailSource,extract}
                })

                console.log("FetchingArticle");
                setState(article[0]);
                setStatus(false);
                errorController(false);

            }
        }).catch(err => {

            console.log('There ir an Error');
            setStatus(false);
            errorController(true);
            
        })
}