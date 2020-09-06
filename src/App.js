import React,{useState,useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import Newscards from './components/NewsCards/NewsCards';
import useStyles from './styles.js'

const alanKey='2e5ca4e887f55da27b92d70eeafbbc3d2e956eca572e1d8b807a3e2338fdd0dc/stage'
const App=()=>{
    const[newsArticles,setNewsArticles]=useState([]);
    const classes=useStyles()

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
           <div className={classes.logoContainer}>
               <img src="https://alan.app/voice/images/previews/preview.jpg" className={classes.alanLogo} alt="alan logo"/>

           </div>
            <Newscards articles={newsArticles}/>
        </div>
    );
}

export default App;