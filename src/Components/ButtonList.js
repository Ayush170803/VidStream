import React from 'react'
import Button from './Button'
const List = ["Games","Music","Movies","Mixes","Podcasts","Live","News","Cricket","Coding","Aptitude","Live","Restaurants","Politics"];
const ButtonList = () => {
  return (
    <div id="buttons">
    {
    List.map(function(value)
    {
        return (
        <Button name={value}/>
        )
    })
    }
    </div>
  )
}

export default ButtonList
