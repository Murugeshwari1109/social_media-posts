import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DataContext from '../context/DataContext';

const EditPost = () => {
  const {posts,editTitle,editBody,setEditBody,setEditTitle,handleEdit}=useContext(DataContext)
  const {id}=useParams();
  const post=posts.find(post => post.id === id);
  useEffect(()=>{
    if(post){
      setEditTitle(post.title)
      setEditBody(post.body)
    }
  },[post,setEditTitle,setEditBody])
  
  return (
    <main className='NewPost'>
      {editTitle && 
      <>
        <h2>EditPost</h2>
        <form className='newPostForm' onSubmit={(e)=>e.preventDefault()}>
           <label htmlFor="editTitle">Title:</label>
           <input 
               autoFocus
               type="text" 
               id="editTitle" 
               value={editTitle} 
               required
               onChange={(e)=>setEditTitle(e.target.value)}
           />
           
           <label htmlFor="editBody">Post:</label>
           <textarea 
               id="editBody"
               required
               value={editBody}
               onChange={(e)=>setEditBody(e.target.value)}
           />
              
           <button type="submit" onClick={()=>handleEdit(post.id)}>Submit</button>
           
        </form>  
      </>}
      
    </main>
    
  )
}

export default EditPost