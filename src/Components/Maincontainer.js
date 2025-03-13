import React from 'react'
import ButtonList from './ButtonList'
import Videocontainer from './Videocontainer'
import Login from './Login'
import Sidebar from './Sidebar'

/**
 * Main container
 *      buttonlist
 *      videocontainer
 *      videocard
 */

const Maincontainer = () => {
  return (
    <>
      <Sidebar/>
    <div>
      <ButtonList/>
      <Videocontainer/>
    </div>
    </>
  )
}

export default Maincontainer
