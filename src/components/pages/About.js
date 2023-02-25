import React from 'react';

export default function About() {
  return (
    <div>
      <h1>About Me</h1>

      <div>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
          <img src={require('../../assets/images/work-profile-pic.png')} style={{
              borderRadius:"50%",
              width:"125px",
              height:"125px",
            }} alt="Profile" />
        </div>

        <div>
          <p><br></br>
            My name is Alex Cook. I graduated from UGA in 2017 with a degree in Digital Marketing. I have been working in the digital marketing field since. In August 2022, I started taking a fullstack bootcamp at Georgia Tech. I graduated on 2/23/23.<br></br><br></br>For fun I workout, write, compose music, and read.
          </p>
        </div>
      </div>
    </div>
  );
}
