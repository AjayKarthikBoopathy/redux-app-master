import React from 'react'
import { useSelector } from 'react-redux'

function NavBar() {
  // const {state, dispatch} = useContext(contextname)        //useReducer

  //Redux toolkit
  // const userInfo = useSelector(state=>state.userInfo.data)         //<h3>{userInfo.name}</h3>
  const {name} = useSelector(state=>state.userInfo.data)              //destructured
  return (
    <div className='nav-container'>
        <h3>{name}</h3>
        <button>logout</button>
    </div>
  )
}

export default NavBar