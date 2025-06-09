import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import BlogPage from './components/BlogPage'
import './App.css'

function App() {
  useEffect(() => {
    // Redirect to blog page if on the homepage
    if (window.location.pathname === '/') {
      window.location.href = '/blog';
    }
  }, []);

  // Only render content if not on the homepage
  if (window.location.pathname === '/') {
    return <div className="loading">Redirecting to blog...</div>;
  }

  // Render different components based on the current path
  const renderContent = () => {
    const path = window.location.pathname;
    
    if (path === '/blog' || path.startsWith('/blog/')) {
      return <BlogPage />;
    }
    
    // Add other page components as needed
    return <div className="page-not-found">Page not found</div>;
  };

  return (
    <>
      <Navbar />
      <div className="content">
        {renderContent()}
      </div>
    </>
  )
}

export default App
