import React from 'react';
// import { Row } from 'react-bootstrap';

export default function Portfolio() {
  return (
    <div className="work centered">
      <div className="myDiv">
        <h2>Projects</h2>
        <div>
            <h4>Coding</h4>
            <ul>
                <li><a href='https://www.pixelcooksites.com/' target='_blank' rel="noopener noreferrer">PixelCook Sites</a> - custom-built websites and web applications for clients</li>
                <ul>
                    <li>Uses knowledge of React.js, Node.js, HTML, CSS, CMS - depending on each client's specific needs.</li>
                </ul>
                <ul>
                    <li>Completed Projects</li>
                    <ul>
                        <li>Business</li>
                        <ul><li>Leash Me Out</li></ul>
                        <li>E-Commerce</li>
                        <ul><li>Classic City Green Solutions</li></ul>
                    </ul>
                </ul>
                <li><a href='https://www.wescribbe.com/' target='_blank' rel="noopener noreferrer">WeScribbe</a> - serialized storytelling. Empowers writers to connect with readers and publish their work in a serialized way.</li>
                <ul>
                    <li>Uses front-end and back-end web development, MongoDB, React.js, HTML, CSS.</li>
                </ul>
                <li><a href='https://dnd-combat-simulator.herokuapp.com/' target='_blank' rel="noopener noreferrer">Dungeon Generator</a> - allows D&D players to generate randomized dungeons for inspiration.</li>
                <ul>
                    <li>Uses front-end and back-end web development, APIs, React.js, HTML, CSS.</li>
                </ul>
            </ul>
            <h4>Writing</h4>
            <ul>
                <li><a href='https://open.substack.com/pub/paracosmworld' target='_blank' rel="noopener noreferrer">Tales of Kiv</a> - a heartfelt adventure story. The young and adventerous Kiv sets off from his quaint farming village to become the greatest knight to have ever lived!</li>
            </ul>
            <h4>Music</h4>
            <ul>
                <li><a href='https://www.youtube.com/@OgmaSquadChannel' target='_blank' rel="noopener noreferrer">Ogma Squad</a> - music remixing YouTubers</li>
                <li><a href='https://alexcook.itch.io' target='_blank' rel="noopener noreferrer">Video Game Music Compositions</a> - loop packs for video game developers</li>
                <li><a href='https://portfoliopage.herokuapp.com' target='_blank' rel="noopener noreferrer">Alexander</a> - experimental pop music</li>
            </ul>
        </div>
      </div>
    </div>
  );
}