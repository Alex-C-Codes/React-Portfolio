import React from 'react';

export default function About() {
  return (
    <div>
      <h1>About Page</h1>

      <div className='container'>
        
          <img src={require('../../assets/images/work-profile-pic.png')} style={{width:"150px",height:"150px"}} alt="Profile" />

          <p>
            My name is Alex Cook. I graduated from UGA in 2017 with a degree in Digital Marketing. I have been working in the field since. I have taken a fullstack bootcamp at Georgia Tech. For fun I workout, compose music, and read.
          </p>

      </div>
    </div>
  );
}
