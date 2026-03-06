import React from 'react'

const ImgCard = (props) => {
  return (
    <>
     <div className="w-full h-130 flex">
        <div className=" project1  rounded-[50px] shadow-2xl  bg-black m-2 flex-1">
            <img className=' hover:rounded-[50px] h-full w-full' src={props.img1} alt="" />
        </div>
        <div className="project2 rounded-[50px]  shadow-2xl  bg-black flex-1">
            <img className='h-full w-full rounded-[50px] ' src={props.img2} alt="" />
        </div>
      </div>
      </>
  )
}

export default ImgCard
