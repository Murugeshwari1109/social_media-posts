import { useContext } from "react"
import DataContext from '../context/DataContext';

const NewPost = () => {
    const {handleSubmit,postTitle,setPostTitle,postBody,setPostBody}=useContext(DataContext);
    return (
       <main className='NewPost'>
        <h2 style={{color:"#3498db"}}>Create your NewPost</h2>
        <form className='newPostForm' onSubmit={handleSubmit}>
           <label htmlFor="postTitle">Title:</label>
           <input 
               autoFocus
               type="text" 
               id="postTitle" 
               value={postTitle} 
               required
               placeholder="Enter post title"
               onChange={(e)=>setPostTitle(e.target.value)}
           />
           
           <label htmlFor="postBody">Post:</label>
           <textarea 
               id="postBody"
               required
               value={postBody}
               placeholder='Enter post body'
               onChange={(e)=>setPostBody(e.target.value)}
           />
              
           <button type="submit">Submit</button>
           
        </form>  
       </main>
    )
  }
  
  export default NewPost