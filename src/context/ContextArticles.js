import React,{useState} from 'react';

const Context = React.createContext({});

export  function ArticlesContextProvider({children}){
    const [articles,setArticles] = useState([])
    return(
        <Context.Provider value = {{articles,setArticles}}>
            {children}
        </Context.Provider>
    )
}

export default Context;