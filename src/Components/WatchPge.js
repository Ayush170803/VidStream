import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/Appslice';
import { useSearchParams } from 'react-router-dom';
import Livechat from './Livechat';
import Sidebar from './Sidebar';
const WatchPge = () => {

  const [searchparams] = useSearchParams();
  console.log(searchparams.get("v")); // gives the value of that v in link
  const v=searchparams.get("v");
  
  const dispatch = useDispatch();
  useEffect(()=>
    {
      dispatch(closeMenu())
    },[dispatch])
     
  return (
    <>
    <Sidebar/>
    <div id="watchcontainer">
      <div>
      <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+v+"?autoplay=1"} 
      title="YouTube video player"
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      <div>
        <Livechat/>
      </div>
    </div>
    </>
  )
}

export default WatchPge
