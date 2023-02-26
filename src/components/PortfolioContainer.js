import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Portfolio from './pages/pagesCoding/Portfolio';
import Contact from './pages/pagesCoding/Contact';
import Resume from './pages/pagesCoding/Resume';
import Music from  './pages/pagesMusic/Music';
import Writing from  './pages/pagesWriting/Writing';
import Footer from './Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume/>
    }
    if (currentPage === 'Music') {
      return <Music/>
    }
    if (currentPage === 'Writing') {
      return <Writing/>
    }
    return <Contact />
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='page-container'>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      <div className='content-wrap m-5'>
        {renderPage()}

        {/* <div id='#about'><About /></div>
        <div id='#portfolio'><Portfolio /></div>
        <div><Resume/></div>
        <div><Music/></div>
        <div><Writing/></div>
        <div><Contact /></div> */}
      </div>
      <div className='m-5'><Footer /></div>
    </div>
  );
}
