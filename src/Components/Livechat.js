import { useEffect, useState } from "react";
import Chatmessage from "./Chatmessage";
import { useDispatch, useSelector } from "react-redux";
import { addmessage } from "../utils/Chatslice";
import { generator,getRandomhMessage} from "../utils/helper";

const Livechat = () =>
{
    const dispatch = useDispatch();
    const [chatText,setChatText] = useState("");
    const chatmessages = useSelector((store)=>store.chat.messages);

    //api polling and use redux store for api polling

    useEffect(()=>
    {
       const inter=setInterval(() => {
        dispatch(addmessage(
            {
                name:generator(),
                message:getRandomhMessage()
            } 
        ));
        //  console.log("polling data");
        }, 2000);
        
        return ()=>{
            clearInterval(inter);
        }
    },[]);

    return(
        <div>
        <div id="livecontainer">
            { // don't use index as key
            chatmessages.map(function(value,index)
            {
                    return (
                        <Chatmessage name={value.name} message={value.message} key={index}/>
                    )
            })
            }
        </div>
        <form id="chatting" onSubmit={(e)=>{
            // console.log(chatText);
            dispatch(addmessage({
                    name:"Admin🙋",
                    message:chatText
                }))
            e.preventDefault();
                setChatText("");
            }}>

            <input type="text" id="inputchat" value={chatText} onChange={(e)=>{setChatText(e.target.value)}} placeholder="Enter Your Message"></input>
            <button id="chatsubmit">Send</button>
        </form>
        </div>
    )
}
export default Livechat;


