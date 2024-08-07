import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <>
    <ul className='nav nav-tabs' style={{backgroundColor:'#D2EEFF'}}>
      <li style={{}}>
        <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
          }}>
            <img src={require('../assets/images/logo.png')} style={{
                width:"40px",
                height:"40px",
              }} alt="Profile" />
        </div>
      </li>
      <li className="nav-item nav-link" style={{fontWeight: 'bold'}}>
        Alex Cook
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
      <li className='nav-item'>
        <a
          href='#music'
          onClick={() => handlePageChange('Music')}
          className={currentPage === 'Music' ? 'nav-link active' : 'nav-link'}
        >
          Music
        </a>
      </li>
      {/* <li className='nav-item'>
        <a
          href='#writing'
          onClick={() => handlePageChange('Writing')}
          className={currentPage === 'Writing' ? 'nav-link active' : 'nav-link'}
        >
          Writing
        </a>
      </li> */}
      {/* <li className="nav-item">
        <a
          href="#projects"
          onClick={() => handlePageChange('Projects')}
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </a>
      </li> */}
    </ul>
    </>
  );
}

export default NavTabs;