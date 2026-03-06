import React from 'react'

const ImgCard = (props) => {
  return (
    <>
     <div className="w-full h-130 flex">
        <div className=" project1 shadow-2xl overflow-hidden  rounded-[50px] hover:shadow-3xl flex-1">
            <img className='  hover:scale-105 h-full w-full' loading='lazy' src={props.img1} alt="" />
        </div>
        <div className="project2 shadow-2xl overflow-hidden rounded-[50px]  hover:shadow-3xl  flex-1">
            <img className=' hover:scale-105 h-full w-full ' loading='lazy' src={props.img2} alt="" />
        </div>
      </div>
      </>
  )
}

export default ImgCard
