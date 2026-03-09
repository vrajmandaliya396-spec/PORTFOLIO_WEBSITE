import { useGSAP } from '@gsap/react'
import ImgCard from '../components/projectsPage/ImgCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import NavMenuInnerContent from '../components/homePage/NavMenuInnerContent'
import NavMenu from '../components/homePage/NavMenu'
import { useState } from 'react'


const Projects = () => {

    const [menuOpen, setMenuOpen] = useState(false);
  

  const projects = [{
    image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
  }]


  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from('.hero', {
      height: '100px',
      stagger: {
        amount: 0.8
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'top -150%',
        scrub: true
      }
    })
  })

  return (
    <div className='lg:p-4 p-2 mb-50'>

      <img
        src="src\assets\logo2.png"
        className="relative lg:h-12 lg:w-42 lg:top-0 lg:left-0  h-8 w-30 top-6 left-7"
        alt=""
      />

      <div className="">
        <NavMenuInnerContent menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      <div>
        <NavMenu setMenuOpen={setMenuOpen}></NavMenu>
      </div>

      <div className=' pt-[45vh]'>
        <h2 className='font-[font2] lg:text-[9.5vw] text-7xl uppercase'>Projets</h2>
      </div>
      <div className='-lg:mt-20 lol'>
        {projects.map(function (elem, idx) {
          return <div key={idx} className='hero w-full lg:h-[475px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
            <ImgCard image1={elem.image1} image2={elem.image2} />
          </div>
        })}

      </div>
    </div>
  )
}

export default Projects