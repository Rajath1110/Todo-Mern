import React from 'react'
import './Signin.css'

function Signin() {
  return (
    <div className='signin'>
      <div className='container'>
        <div className='row'>
            <div className='col-lg-8 column d-flex justify-content-center align-items-center'>
                <div className='d-flex flex-column'> 
                    <input className='p-2 my-3'
                        type='email'
                        placeholder='email'
                        name='email'
                    />
                    <input className='p-2 my-3'
                        type='password'
                        placeholder='password'
                        name='password'
                    />
                </div>
            </div>
            <div className='col-lg-4 column col-left d-flex justify-content-center align-items-center signin-heading'>SignIn</div>

        </div>
      </div>
    </div>
  )
}

export default Signin
