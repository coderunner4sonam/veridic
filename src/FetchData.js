import React, { useEffect, useState } from 'react'
import axios from "axios"
import Error from './Error'
import Loading from './Loading'
import Card from './Card'

function FetchData() {
    let [store,setStore]=useState([])
    let[flag,setFlag]=useState(true)
    let [error,setError]=useState(false)
    let[ishover,setHover]=useState(-1)
    let[pagination,setPagination]=useState(0)

    async function getData (){
        try{
        
            let storedata = await axios.get("https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed")
            setStore( storedata.data)
          
        }
        catch(error){
            setError(true)
        }
    }
    console.log(store)

    useEffect(()=>{
      getData()
      setTimeout(()=>{
        
          setFlag(false)
      },4000)
    },[])
    
  return (
   
    <div>{
     flag ? 
        <Loading/> 
        :
       error? <Error/>:
    <> 
       <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap",width:"100%",margin:"15px"}}>
      {
        
        store.slice(pagination*8,pagination*8+8).map((element,index)=>(
          
          <div style={{border:"1px solid black", margin:"10px",boxShadow:ishover===index?"5px 5px 5px 5px black":"0px 0px white"}} onMouseOver={()=>setHover(index)}  onMouseEnter={()=>setHover(index)} onMouseLeave={()=>setHover(-1)} >
                <a href=''>
                    <Card date={element.date} link={element.link} rendered={element.title.rendered}
                      protect={element.excerpt.protected} excerpt={element.excerpt.rendered}
                      url={element.jetpack_featured_media_url} author={element.author}
                      />
                </a>
            </div>
          ))
        }
    </div>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    {
      [...Array(Math.floor(store.length/8))].map((ele,ind)=>(
        <div style={{backgroundColor:"green",height:"22px",width:"20px",borderRadius:"50px",margin:"2px",border:"1px solid darkgreen",textAlign:"center"}} onClick={()=>setPagination(ind)}>{ind+1}</div>
        ))
      }
    </div>
  </> 
  }
  
 </div>   

  )
}

export default FetchData
