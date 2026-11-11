import React from 'react'
import Acaunt from '../assets/110d391ca632fc5acf73a2199bfbd67a93074d2c.jpg'
const Section = () => {
  return (
    <div className='flex '>
        <div className='mt-[20px] ml-[200px]'>
          <label class="input">
  <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke-width="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" />
</label>
        
        </div> 
        <div className='ml-[700px] flex items-center'>
          <img className='w-[7%] rounded-full mt-[20px] ' src={Acaunt} alt="" />
          <p>John</p>
          <p>12 level</p>
        </div>
    </div>
  )
}

export default Section