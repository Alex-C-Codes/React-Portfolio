import React from 'react';
import pdf from '../../assets/content/resume.pdf';

export default function Resume() {
  return (
    <div>
      <h1>Resume Page</h1>

      <h4>Proficiencies</h4>

      <div class='container mt-1'>
        <ul>
          <li>HTML/CSS/Git</li>
          <li>javascript</li>
          <li>Bootstrap</li>
          <li>The DOM</li>
          <li>APIs</li>
          <li>JQuery</li>
          <li>JSON</li>
        </ul>
        <ul>
          <li>AJAX</li>
          <li>Node</li>
          <li>ES6</li>
          <li>Object-oriented programming</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>MVC paradigm</li>
        </ul>
        <ul>
          <li>Sequelize</li>
          <li>Testing</li>
          <li>Agile development</li>
          <li>Progressive Web Apps</li>
          <li>React</li>
          <li>NoSQL</li>
          <li>MERN Stack</li>
          <li>Computer science fundamentals</li>
        </ul>
      </div>

      <a target="_blank" rel="noopener noreferrer" href={pdf}>Click to Download Resume</a>

      <br></br><br></br>

    </div>
  );
}