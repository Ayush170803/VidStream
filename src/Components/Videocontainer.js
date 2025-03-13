import { useEffect, useState } from "react";
import Videocard ,{AdVideo} from "./Videocard";
import { YOUTUBE_API } from "../utils/constant";
import { Link } from "react-router-dom";
const Videocontainer = () =>
{  
   const [videos,setVideos] = useState([]);

   async function getvideos()
    {
        const output=await fetch(YOUTUBE_API);
        const response=await output.json();
        console.log(output); 
        setVideos(response.items);
    }

    useEffect(function()
    {
        getvideos();
    },[]);


    return(
        <div id="videoitems"> 
        {videos[0] && <AdVideo info={videos[0]}/>}
        {
        videos.map(function(value)
        {
            return(<Link to={"/watch?v="+value.id} id="watchcards"><Videocard info={value} key={value.id}/></Link>);
        })
        }
        </div>
    );
}
export default Videocontainer;