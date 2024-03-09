import {createContext,useEffect,useState } from 'react';
import { useNavigate} from 'react-router-dom';
import useWindowResize from '../Customhooks/useWindowResize';
import useAxiosFetchData from '../Customhooks/useAxiosFetchData';
import { format } from 'date-fns';
import api from "../api/posts";
const DataContext=createContext({})
export const DataProvider =({children})=>{

  const [posts,setPost]=useState([]);
  const [search,setSearch]=useState('');
  const [searchResults,setSearchResults]=useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody,setPostBody]=useState('');
  const [editTitle,setEditTitle] = useState('');
  const [editBody,setEditBody] = useState('');
  const navigate=useNavigate();
  const {width}=useWindowResize();
  const {datas,fetchError,isLoading}=useAxiosFetchData('http://localhost:3500/posts');

  useEffect(()=>{
    setPost(datas);
  },[datas])

  
 
  useEffect(()=>{
    const filteredResults=posts.filter((post)=>((post.body).toLowerCase()).includes(search.toLowerCase())
    || ((post.title).toLowerCase()).includes(search.toLowerCase()));
    setSearchResults(filteredResults.reverse());

  },[posts,search])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newId = posts.length ? String(Number(posts[posts.length - 1].id) + 1) : "1";
    const dateTime = format(new Date(), 'MMMM dd, yyyy pp');
  
    try {
      const newPost = { id: newId, title: postTitle, date: dateTime, body: postBody };
      const response = await api.post('/posts', newPost);
      setPost([...posts, response.data]);
      setPostTitle('');
      setPostBody('');
      navigate('/');
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else {
        console.log(`Error: ${error.message}`);
      }
    }
  };
  

  const handleDelete=async (id)=>{
    try{
      await api.delete(`posts/${id}`)
      const postList=posts.filter((post)=>post.id!==(id))
      setPost(postList);
      navigate('/');
    }
    catch(error){
      if(error.response){
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }else{
        console.log(`Error: ${error.message}`);
      }
  }
    
  }

  const handleEdit = async (id) => {
    const editTime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedPost = { id, title: editTitle, date: editTime, body: editBody };
    try{
      const response=await api.put(`/posts/${id}`,updatedPost);
      setPost(posts.map(post => post.id===id ? {...response.data}:post));
      setEditTitle('');
      setEditBody(''); 
      navigate('/');

    }catch(error){
      console.log(error.message);
    }

  };
    return (
        <DataContext.Provider  value={{
            width,search,setSearch,
            searchResults, fetchError, isLoading,
            handleSubmit,postTitle,setPostTitle,
            postBody,setPostBody,handleDelete,posts,
            editTitle,editBody,setEditBody,setEditTitle,handleEdit
        }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContext; 