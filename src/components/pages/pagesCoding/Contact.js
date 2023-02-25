import React from 'react';

export default function Contact() {

  return (
    <div>
      <div><h1>Contact Me</h1></div>
      <div>
        <form target="_blank" action="https://formsubmit.co/85b6f0b92dc158f646d3029977665364" method="POST">
          <div className="form-group">
            <div className="form-row">
              <div className="col">
                <input type="text" name="name" className="form-control" placeholder="Full Name" required />
              </div>
              <div className="col">
                <input type="email" name="email" className="form-control" placeholder="Email Address" required />
              </div>
            </div>
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" className="form-control" name="message" rows="10" ></textarea>
          </div>
          <button type="submit" className="btn btn-lg btn-dark btn-block">Submit Form</button>
        </form>
      </div>
  </div>
  );
}