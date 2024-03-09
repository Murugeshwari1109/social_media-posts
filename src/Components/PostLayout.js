import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const PostLayout = () => {
  return (
    <>
        <Link to='/postpage/1'>Post1</Link>
        <Link to='/postpage/2'>Post2</Link>
        {/* <Link to='/postpage/newpost'>Newpost</Link> */}
        <Outlet/>
    </>
    
  )
}

export default PostLayout