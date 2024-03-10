import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useWindowResize from '../Customhooks/useWindowResize';
import { format } from 'date-fns';

const DataContext = createContext({
  posts: [],
  width: 0,
  search: '',
  setSearch: () => {},
  searchResults: [],
  handleSubmit: () => {},
  postTitle: '',
  setPostTitle: () => {},
  postBody: '',
  setPostBody: () => {},
  handleDelete: () => {},
  editTitle: '',
  setEditTitle: () => {},
  editBody: '',
  setEditBody: () => {},
  handleEdit: () => {},
});

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');
  const navigate = useNavigate();
  const { width } = useWindowResize();

  useEffect(() => {
    try {
      const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
      console.log('Stored Posts (on mount):', storedPosts);
      setPosts(storedPosts);
    } catch (error) {
      console.error('Error retrieving data from local storage:', error);
    }
  }, []);

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = posts.length ? String(Number(posts[posts.length - 1].id) + 1) : '1';
    const dateTime = format(new Date(), 'MMMM dd, yyyy pp');

    const newPost = { id: newId, title: postTitle, date: dateTime, body: postBody };
    setPosts((prevPosts) => [...prevPosts, newPost]);
    setPostTitle('');
    setPostBody('');
    console.log('New Post added:', newPost);
    navigate('/');
    // Update local storage after adding the new post
    localStorage.setItem('posts', JSON.stringify([...posts, newPost]));
  };

  const handleDelete = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
    console.log('Post deleted (ID:', id, '):', updatedPosts);
    navigate('/');
    // Update local storage after deleting a post
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const handleEdit = (id) => {
    const editTime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedPosts = posts.map((post) =>
      post.id === id ? { ...post, title: editTitle, date: editTime, body: editBody } : post
    );
    setPosts(updatedPosts);
    setEditTitle('');
    setEditBody('');
    console.log('Post edited (ID:', id, '):', updatedPosts);
    navigate('/');
    // Update local storage after editing a post
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const contextValue = {
    posts,
    width,
    search,
    setSearch,
    searchResults,
    handleSubmit,
    postTitle,
    setPostTitle,
    postBody,
    setPostBody,
    handleDelete,
    editTitle,
    setEditTitle,
    editBody,
    setEditBody,
    handleEdit,
  };

  return <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>;
};

export default DataContext;
