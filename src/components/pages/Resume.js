import React from 'react';
import pdf from '../../assets/content/resume.pdf';

export default function Resume() {
  return (
    <div>
      <h1>Resume Page</h1>

      <h4>Proficiencies</h4>
      <ul>
        <li>HTML</li>
        <li>javascript</li>
        <li>react js</li>
      </ul>

      <a target="_blank" rel="noopener noreferrer" href={pdf}>Click to Download Resume</a>

      <br></br><br></br>

    </div>
  );
}