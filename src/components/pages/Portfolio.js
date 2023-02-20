import React from 'react';
import { Row } from 'react-bootstrap';

export default function Portfolio() {
  return (
    <div id="work" class="work centered">
      <div class="myDiv">
        <h2>My Work</h2>
        <Row>
        <div class="m-2 flex-container row">
            <div class="column">
                <a target="_blank" rel="noopener noreferrer" href="https://dnd-combat-simulator.herokuapp.com">
                    <img class="work-img" src={require('../../assets/images/dnd_characterCreation.png')} alt="Dnd-Combat-Simulator" style={{width:"300px",height:"225px"}} />
                </a>
            </div>
        </div>
        <div class="m-2 flex-container row">
            <div class="column">
                <a target="_blank" rel="noopener noreferrer" href="https://alexcook-notetaker.herokuapp.com">
                    <img class="work-img" src={require('../../assets/images/noteTaker.png')} alt="Note Taker" style={{width:"300px",height:"225px"}} />
                </a>
            </div>
        </div>
        <div class="m-2 flex-container row">
            <div class="column">
                <a target="_blank" rel="noopener noreferrer" href="https://alex-c-codes.github.io/Alex-Cook-Horiseon-Marketing/">
                    <img class="work-img" src={require('../../assets/images/module-1-screenshot.png')} alt="Horiseon Marketing" style={{width:"300px",height:"225px"}} />
                </a>
            </div>
        </div>
        </Row>
        <Row>
        <div class="m-2 flex-container row">
            <div class="column">
                <a target="_blank" rel="noopener noreferrer" href="https://alex-c-codes.github.io/AlexCook-WeatherDashboard/">
                    <img class="work-img" src={require('../../assets/images/weatherDashboard.png')} alt="Weather Dashboard" style={{width:"300px",height:"225px"}} />
                </a>
            </div>
        </div>
        <div class="m-2 flex-container row">
            <div class="column">
                <a target="_blank" rel="noopener noreferrer" href="https://alex-c-codes.github.io/AlexCook-WorkDayScheduler/">
                    <img class="work-img" src={require('../../assets/images/workDayScheduler.png')} alt="Work Day Scheduler" style={{width:"300px",height:"225px"}} />
                </a>
            </div>
        </div>
        <div class="m-2 flex-container row">
            <div class="column">
                <a target="_blank" rel="noopener noreferrer" href="https://alex-c-codes.github.io/AlexCook-CodeQuiz/">
                    <img class="work-img" src={require('../../assets/images/codingQuiz.png')} alt="Coding Quiz" style={{width:"300px",height:"225px"}} />
                </a>
            </div>
        </div>
        </Row>
      </div>
    </div>
  );
}