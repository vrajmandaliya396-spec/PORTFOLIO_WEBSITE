import React from 'react'
import { Link } from 'react-router-dom'
import { Path } from 'three'

const HomeHeroBottomText = () => {
  return (
        <h1 onClick={() => window.open("http://localhost:5173/projects")} className=' hover:lime-200 cursor-pointer transition-all duration-300 ease-in-out'>VMGRAPHICSTUDIO</h1>
  )
}

export default HomeHeroBottomText
