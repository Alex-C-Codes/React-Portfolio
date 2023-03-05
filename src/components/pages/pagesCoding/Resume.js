import React from 'react';
import pdf from '../../../assets/content/Alex Cook Resume_Final_CS.pdf';
// this site has flexbox notes: https://mdbootstrap.com/docs/react/layout/flexbox/

export default function Resume() {
  return (
    <div>
      <h1>Resume Page</h1>

      <h4>Proficiencies</h4><br></br>

      <div className='container mt-1 d-flex justify-content-center' style={{fontSize:'2vmin'}}>
        <ul>
          <li>HTML/CSS/Git</li>
          <li>javascript</li>
          <li>Bootstrap</li>
          <li>The DOM</li>
          <li>APIs</li>
        </ul>
        <ul>
          <li>JQuery</li>
          <li>JSON</li>
          <li>AJAX</li>
          <li>Node</li>
          <li>ES6</li>
        </ul>
        <ul>
          <li>Object-oriented programming</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>MVC paradigm</li>
          <li>Sequelize</li>
        </ul>
        <ul>
          <li>Testing</li>
          <li>Agile development</li>
          <li>Progressive Web Apps</li>
          <li>React</li>
          <li>NoSQL</li>
        </ul>
        <ul>
          <li>MERN Stack</li>
          <li>Computer science fundamentals</li>
        </ul>

        {/* <div className='row'>
          <div className='col'>
            <ul>
              <li>HTML/CSS/Git</li>
              <li>javascript</li>
              <li>Bootstrap</li>
              <li>The DOM</li>
              <li>APIs</li>
            </ul>
          </div>
          <div className='col'>
            <ul>
              <li>JQuery</li>
              <li>JSON</li>
              <li>AJAX</li>
              <li>Node</li>
              <li>ES6</li>
            </ul>
          </div>
          <div className='col'>
            <ul>
              <li>Object-oriented programming</li>
              <li>Express</li>
              <li>MySQL</li>
              <li>MVC paradigm</li>
              <li>Sequelize</li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <ul>
              <li>Testing</li>
              <li>Agile development</li>
              <li>Progressive Web Apps</li>
              <li>React</li>
              <li>NoSQL</li>
            </ul>
          </div>
          <div className='col'>
            <ul>
              <li>MERN Stack</li>
              <li>Computer science fundamentals</li>
            </ul>
          </div>
        </div> */}

      </div>
      <br></br>

      <a target="_blank" rel="noopener noreferrer" href={pdf}>Click to Download Resume</a>

    </div>
  );
}