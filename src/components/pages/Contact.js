import React from 'react';
// import { useState } from 'react';

// function ValidateEmail(inputText)
// {
//   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   if(inputText.value.match(mailformat))
//   {
//     alert("Valid email address!");
//     document.form1.text1.focus();
//     return true;
//   }
//   else
//   {
//     alert("You have entered an invalid email address!");
//     document.form1.text1.focus();
//     return false;
//   }
// }

export default function Contact() {

  // // values
  // const [values, setValue] = useState({
  //   name: '',
  //   email: '',
  //   message: ''
  // });

  // // function that updates values
  // const set = name => {
  //   return ({ target: { value } }) => {
  //     setValue(oldValues => ({...oldValues, [name]: value }));
  //   }
  // };

  // // saves form data
  // const saveFormData = async () => {
  //   const response = await fetch('/api/registration', {
  //     method: 'POST',
  //     body: JSON.stringify(values)
  //   });
  //   if (response.status !== 200) {
  //     throw new Error(`Request failed: ${response.status}`);
  //   }
  // }

  // // 
  // const onSubmit = async (event) => {
  //   event.preventDefault(); // prevent default submission
  //   try {
  //     await saveFormData();
  //     alert('Your registration was successfully submitted!');
  //     setValue({
  //       name: '', email: '', message: ''
  //     });
  //   } catch (e) {
  //     alert(`Registration failed! ${e.message}`);
  //   }
  // }

  // return (
  //   <div>
  //     <h1>Contact Page</h1>
  //     <form onSubmit={onSubmit}>
  //       <h3>Submit Contact Form</h3>

  //       <label for="name">Name:</label>
  //       <input required value={values.name} onChange={set('name')} />
  //       <br></br><br></br>

  //       <label for="email">Email Address:</label>
  //       <input required value={values.email} onChange={set('email')} />
  //       <br></br><br></br>

  //       <label for="message">Message:</label>
  //       <input value={values.message} onChange={set('message')} />
  //       <br></br><br></br>

  //       {/* <button type="submit" onClick={ValidateEmail(values.name)}>Submit</button> */}

  //       <button type="submit">Submit</button>
  //     </form>
  //   </div>
  // );

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