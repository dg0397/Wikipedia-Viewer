export default function getArticles(setState,setStatus,{keyword}){
    setStatus(true)
    fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&smaxage=0&maxage=0&origin=*&prop=extracts%7Cpageimages&list=&generator=search&exsentences=1&exlimit=max&exintro=1&explaintext=1&piprop=thumbnail%7Cname%7Coriginal&pithumbsize=250&pilimit=max&pilicense=free&gsrnamespace=&gsrlimit=10&gsroffset=0&gsrsort=relevance&gsrsearch=${keyword}`)
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