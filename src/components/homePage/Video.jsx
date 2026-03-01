import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full'>
      <video autoPlay muted loop className="h-screen w-screen object-cover " src="src\assets\video.mp4"></video>
    </div>
  )
}

export default Video
