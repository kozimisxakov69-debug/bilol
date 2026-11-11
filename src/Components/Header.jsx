import React from 'react'
import Ikonka from '../assets/social icons.png'
const Header = () => {
  return (
    <div className=''>
          <div>
            <nav className='flex justify-between'>
              <div>
                <p>Themebau.</p>
              </div>
              <div className='flex gap-[20px]'>
                <p>home</p>
                <p>projects</p>
                <p>pages</p>
                <p>contact</p>
                <img src={Ikonka} alt="" />
              </div>
            </nav>
          </div>
    </div>
  )
}

export default Header