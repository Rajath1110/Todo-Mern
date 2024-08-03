import React from 'react'
import './Home.css';

function Home() {
  return (
    <div className='home d-flex justify-content-center align-items-center' >
        <div className='container d-flex justify-content-center align-items-center flex-column'>
            <h1 className='text-center'> Organize your<br/>
                work and life,finally
            </h1>
            <p>Become focused,Organized and professional with <br/>todo app</p>
            <button className='home-btn'>Make Todo List</button>
            
        </div>
      
    </div>
  )
}

export default Home
