import React,{useState} from 'react';

const Context = React.createContext({});

export  function ArticlesContextProvider({children}){
    const [articles,setArticles] = useState([]);
    const [loading , setLoading] = useState(false);
    
    return(
        <Context.Provider value = {{articles,setArticles,setLoading,loading}}>
            {children}
        </Context.Provider>
    )
}

export default Context;