import React from "react";
// import fontawesome from '@fortawesome/fontawesome';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid';
// import { ListGroup } from 'react-bootstrap';

// fontawesome.library.add(faCheckSquare, faCoffee);

export default function Footer() {
    return (
        <div className='centered'>
                {/* <ListGroup horizontal>
                    <ListGroup.Item>This</ListGroup.Item>
                    <ListGroup.Item>ListGroup</ListGroup.Item>
                    <ListGroup.Item>renders</ListGroup.Item>
                    <ListGroup.Item>horizontally!</ListGroup.Item>
                </ListGroup> */}
            <ul>
                <li className='footerStyle'>
                    <i className="mr-1 fa fa-github" aria-hidden="true"></i>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Alex-C-Codes">GitHub</a>
                </li>
                <li className='footerStyle'>
                    <i className="mr-1 fa fa-linkedin-square" aria-hidden="true"></i>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alex-cook-5408b4ab/">LinkedIn</a>
                </li>
                <li className='footerStyle'>
                    {/* <FontAwesomeIcon icon='coffee' /> */}
                    <a target="_blank" rel="noopener noreferrer" href="https://alexcook.itch.io">itch.io</a>
                </li>
                {/* <li className='footerStyle'>
                    <FontAwesomeIcon icon="fa-brands fa-itch-io" />
                    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@OgmaSquadChannel/featured">YouTube</a>
                </li> */}
                {/* <li className='footerStyle'>
                    <FontAwesomeIcon icon="fa-brands fa-itch-io" />
                    <a target="_blank" rel="noopener noreferrer" href="https://alexcook.itch.io">Email</a>
                </li> */}
                {/* <li className="footerStyle">
                    <button onClick={() => window.location = 'alexcook1613@gmail.com'}>Contact Me</button>
                </li> */}
            </ul>
        </div>
    );
}