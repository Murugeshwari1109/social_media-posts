import React,{ useContext } from 'react';
import Feed from './Feed';
import DataContext from '../context/DataContext';
const Home = () => {
  const {searchResults, fetchError, isLoading } =useContext(DataContext);
  // console.log(fetchError);

  return (
    <main className='Home'>
      {isLoading && <p style={{textAlign:"center", alignItems:"center", color:"red",lineHeight: "50vh"}}>Loading data....</p>}
      {!isLoading && fetchError && <p>{fetchError}</p>}
      {!isLoading && !fetchError && searchResults.length ? (
        <Feed posts={searchResults} />
      ) : null}
      {!isLoading && !fetchError && searchResults.length === 0 ? (
        <p style={{ textAlign:"center",lineHeight: "50vh", color:"red"}}>No posts are available here</p>
      ) : null}
    </main>
  );
};

export default Home;
