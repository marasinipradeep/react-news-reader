import React,{useState,useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import Newscards from './components/NewsCards/NewsCards';


const alanKey='2e5ca4e887f55da27b92d70eeafbbc3d2e956eca572e1d8b807a3e2338fdd0dc/stage'
const App=()=>{
    const[newsArticles,setNewsArticles]=useState([]);

    useEffect(()=>{
        alanBtn({
            key:alanKey,
            onCommand:({command,articles})=>{
                if(command==='newHeadlines'){
                    setNewsArticles(articles)
                }else{
                    console.log("not found")
                }
            }
        })
    },[])
    return (
        <div>
            <h1>Alan AI News Application</h1>
            <Newscards articles={newsArticles}/>
        </div>
    );
}

export default App;