import React, { useState } from 'react'
import SectionOne from '../components/agencePage/SectionOne'
import SectionTwo from '../components/agencePage/SectionTwo'
import NavMenuInnerContent from '../components/homePage/NavMenuInnerContent'
import NavMenu from '../components/homePage/NavMenu'


const Agence = () => {

    const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div className='overflow-hidden '>
      <img
        src="src\assets\logo2.png"
        className="relative lg:h-12 z-50 lg:w-42 lg:top-4 lg:left-6  h-8 w-30 top-6 left-7"
        alt=""
      />
      <div className="z-50">
        <NavMenuInnerContent menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      <div>
        <NavMenu setMenuOpen={setMenuOpen}></NavMenu>
      </div>
      <SectionOne/>
      <SectionTwo/>
    </div>
  )
}
export default Agence
