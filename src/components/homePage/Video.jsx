import React from 'react'

const Video = () => {

  return (
    <>
      <div className="h-screen w-screen bg-black text-white flex relative z-40  font-[font2] flex-col overflow-hidden uppercase leading-27">
      <video autoPlay muted  loop className=" h-full opacity-30 object-cover" src="public\v1.mp4"></video></div>
    </>
  )
}
  
export default Video