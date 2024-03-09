import { useContext } from 'react';
import { useParams ,Link} from 'react-router-dom';
import DataContext from '../context/DataContext';

const PostPage = () => {
  const {posts,handleDelete}=useContext(DataContext);
  const {id}=useParams();
  const post=posts.find(post=>(post.id).toString() === id);
  return (
    <main className='PostPage'>
        <article className="post">
        {post &&
        <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.date}</p>
            <p className="postBody">{post.body}</p>
            <button style={{backgroundColor:"black", color:"white"}} onClick={()=>handleDelete(post.id)}>Delete</button>
            <Link to={`/edit/${post.id}`} ><button className='editButton' >Edit</button></Link>
        </>}
        
      </article>
        
    </main>
  )
}

export default PostPage