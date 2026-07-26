'use client';
import React from 'react'

const EventHandling = () => {
    return (
        <div className='conatiner mx-auto'>

            <h1 className='text-4xl text-center my-5'>Event Handling</h1>
            <button onClick={() => { alert('Button Clicked') }}
                className='border p-2 px-3 block'>Click Me</button>

            <input type="text"
                onChange={(e) => { console.log(e.target.value) }}
                className='block p-2 border' />

            <input type="color"
                onChange={(e) => {
                    document.body.style.backgroundColor = e.target.value;
                    console.log(e.target.value);
                }}
            />

            <input
                type="text"
                className="block p-2 border"
                onKeyDown={(e) => {
                    console.log(e.code);
                }}
            />

            <input type="file"
                onChange={(e) => { console.log(e.target.files[0]);}}
            />        
        </div>
    )
}

export default EventHandling;