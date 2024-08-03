import React from 'react'
import './Signup.css';

function Signup() {
  return (
    <div className='signup'>
        <div className='container'>
             <div className='row'>
                <div className='col-lg-8 column d-flex justify-content-center align-items-center '>
                    <div className='d-flex flex-column'>
                        <input className='p-2 my-3'
                            type = 'text'
                            placeholder='username'
                            name='name'
                        />

                        <input className='p-2 my-3'
                            type='email'
                            placeholder='sample@gmail.com'
                            name='email'
                        />
                        <input className='p-2 my-3'
                            type='password'
                            placeholder='password'
                            name='password'
                        />
                        <button className='btn-signup'>SignUp</button>
                    </div>
                </div>
                <div className='col-lg-4 column col-left d-flex justify-content-center align-items-center '>
                    <h1 className='text-center sign-up-heading'>Sign <br/> Up</h1>
                </div>

             </div>
        </div>
    </div>
  )
}

export default Signup


