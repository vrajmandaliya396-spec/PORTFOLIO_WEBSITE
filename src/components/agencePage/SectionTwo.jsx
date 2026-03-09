import React from 'react'

const SectionTwo = () => {
  return (
    <div className='w-screen bg-black'>
      <div className="w-full h-full bg-black text-white py-16 flex flex-col items-center justify-center gap-10">

        {/* Heading */}
        <h2 className="text-3xl lg:text-4xl font-semibold tracking-wide">
          Let's Connect
        </h2>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-5 px-6 w-full max-w-md 
                        lg:flex  lg:justify-center lg:gap-6">

          <a
            href="https://www.instagram.com/vrajmandaliya?igsh=MWxmYTFxYWxwZHg2bg==&utm_source=ig_contact_invite"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-8 py-3 rounded-full text-center hover:bg-pink-500 hover:border-pink-500 transition duration-300 text-lg"
          >
            Instagram
          </a>

          <a
            href="https://www.linkedin.com/in/vraj-mandaliya-2840a6330/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-8 py-3 rounded-full text-center hover:bg-blue-500 hover:border-blue-500 transition duration-300 text-lg"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/vrajmandaliya396-spec"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-8 py-3 rounded-full text-center hover:bg-gray-700 hover:border-gray-700 transition duration-300 text-lg"
          >
            GitHub
          </a>

          <a
            href="/VRAJ_MANDALIYA_RESUME.pdf"
            target="_blank"
            className="border border-white px-8 py-3 rounded-full text-center hover:bg-green-500 hover:border-green-500 transition duration-300 text-lg"
          >
            Resume
          </a>

          <a
            href="mailto:vrajmandaliya396@gmail.com"
            className="col-span-2 lg:col-span-1 border border-white px-8 py-3 rounded-full text-center hover:bg-yellow-500 hover:border-yellow-500 transition duration-300 text-lg"
          >
            Contact
          </a>

        </div>

      </div>
    </div>
  )
}

export default SectionTwo