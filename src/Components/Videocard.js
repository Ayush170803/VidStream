import React from 'react';

const VideoCard=({ info })=>{

  const {snippet,statistics}=info;
  const {channelTitle,title,thumbnails,publishedAt} = snippet;

  return (
    <div className="video-card">
      <img className="thumbnail" src={thumbnails.high.url} alt="thumbnail"/>
      <div className="video-info">
        <h3 className="video-title">{title}</h3>
        <p className="channel-name">{channelTitle}</p>
        <div className="video-stats">
          <span>👍 {statistics.likeCount}</span>
          <span>👀 {statistics.viewCount}</span>
        </div>
        <p className="publish-date">📅 {new Date(publishedAt).toDateString()}</p>
      </div>
    </div>
  );
};

export default VideoCard;


//  higher order components =? it is a like a function which takes a component and returns a component

// takes a component as parameter 
//~ const advideo = (<Videocard/>) like this but here passed info to get the card

export const AdVideo = ({info}) =>
{
  return(
    <div id="advideocard">
      <VideoCard info={info}/>
    </div>
  );
}
