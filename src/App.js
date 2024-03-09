import React from 'react';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import NewPost from './Components/NewPost';
import PostPage from './Components/PostPage';
import About from './Components/About';
import Missing from './Components/Missing';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import EditPost from './Components/EditPost';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header title="Social Media App" />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="newpost">
            <Route index element={<NewPost />} />
            <Route path=":id" element={<PostPage />} />
          </Route>
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
}
export default App;
