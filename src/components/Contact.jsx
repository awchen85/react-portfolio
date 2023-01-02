import React, {useState} from 'react'

import {validateEmail} from '../utils/helpers';

export const Contact = () => {

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };


  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/05abcf82-4ed0-4a24-a3a7-c7a14f35db3d" className='flex flex-col max-w-[600px] w-full' onSubmit={handleSubmit}>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-purple-600 text-gray-300'>Contact Me</p>
                <p className='text-gray-300 py-4'>// Submit the form below</p>
            </div>
            {/* Name */}
            <input className='bg-[#ccd6f6]' type="text" placeholder='Name' name='name' onBlur={handleChange} />
            {/* Email */}
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' onBlur={handleChange}/>
            {/* Message */}
            <textarea className='bg-[#cc6f6] p-2 'name="message" rows="10" placeholder="Message" onBlur={handleChange}></textarea>
            {errorMessage && (
          <div>
            <p className="error-text text-red-400 font-bold text-2xl">{errorMessage}</p>
          </div>
        )}
            <button className='text-white border-2 hover:bg-purple-600 hover:border-purple-600 px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
        </form>
        
    </div>
  )
}


export default Contact;