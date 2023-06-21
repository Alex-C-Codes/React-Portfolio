import React from 'react';
import { Row } from 'react-bootstrap';

export default function Portfolio() {
  return (
    <div className="work centered">
      <div className="myDiv">
        <h2>My Work</h2>
        <Row>
        <div className="m-2 flex-container row">
            <div className="column">
                <a target="_blank" rel="noopener noreferrer" href="https://flea-market-finds.herokuapp.com/">
                    <img className="work-img" src={require('../../../assets/images/flea-market-finds.png')} alt="Dnd-Combat-Simulator" style={{width:"300px",height:"225px"}} />
                </a>
            </div>
        </div>
        <div className="m-2 flex-container row">
            <div className="column">
                <a target="_blank" rel="noopener noreferrer" href="https://dnd-combat-simulator.herokuapp.com">
                    <img className="work-img" src={require('../../../assets/images/dnd_characterCreation.png')} alt="Dnd-Combat-Simulator" style={{width:"300px",height:"225px"}} />
                </a>
            </div>
        </div>
        <div className="m-2 flex-container row">
            <div className="column">
                <a target="_blank" rel="noopener noreferrer" href="https://alexcook-notetaker.herokuapp.com">
                    <img className="work-img" src={require('../../../assets/images/noteTaker.png')} alt="Note Taker" style={{width:"300px",height:"225px"}} />
                </a>
            </div>
        </div>
        {/* <div className="m-2 flex-container row">
            <div className="column">
                <a target="_blank" rel="noopener noreferrer" href="https://alex-c-codes.github.io/Alex-Cook-Horiseon-Marketing/">
                    <img className="work-img" src={require('../../assets/images/module-1-screenshot.png')} alt="Horiseon Marketing" style={{width:"300px",height:"225px"}} />
                </a>
            </div>
        </div> */}
        </Row>
        <Row>
        <div className="m-2 flex-container row">
            <div className="column">
                <a target="_blank" rel="noopener noreferrer" href="https://alex-c-codes.github.io/AlexCook-WeatherDashboard/">
                    <img className="work-img" src={require('../../../assets/images/weatherDashboard.png')} alt="Weather Dashboard" style={{width:"300px",height:"225px"}} />
                </a>
            </div>
        </div>
        <div className="m-2 flex-container row">
            <div className="column">
                <a target="_blank" rel="noopener noreferrer" href="https://alex-c-codes.github.io/AlexCook-WorkDayScheduler/">
                    <img className="work-img" src={require('../../../assets/images/workDayScheduler.png')} alt="Work Day Scheduler" style={{width:"300px",height:"225px"}} />
                </a>
            </div>
        </div>
        <div className="m-2 flex-container row">
            <div className="column">
                <a target="_blank" rel="noopener noreferrer" href="https://alex-c-codes.github.io/AlexCook-CodeQuiz/">
                    <img className="work-img" src={require('../../../assets/images/codingQuiz.png')} alt="Coding Quiz" style={{width:"300px",height:"225px"}} />
                </a>
            </div>
        </div>
        </Row>

        {/* Games */}

        <br></br>

        <Row>
        <div className="m-2 flex-container row">
            <div className="column text-center">
                <h3>Games</h3>
                <div className='d-flex justify-content-center'>
                    <iframe title='floppy bird' frameborder="0" src="https://itch.io/embed/2124293" width="552" height="167"><a href="https://alexcook.itch.io/floppy-bird">Floppy Bird by Alex Cook</a></iframe>
                </div>
                <div className='d-flex justify-content-center'>
                    <iframe title='top down game' frameborder="0" src="https://itch.io/embed/2127505" width="552" height="167"><a href="https://alexcook.itch.io/top-down-game">Slime Runner - Top Down Game by Alex Cook</a></iframe>
                </div>
            </div>
        </div>
        </Row>

      </div>
    </div>
  );
}