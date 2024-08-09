import React from 'react'
import images from './images.jpg'
import ScrollReveal from "./ScrollReveal";

const About = () => {
  return (
    <ScrollReveal>
    <div className='text-white max-w-[1200px] mx-auto' id="about">
          <div className="md:grid md:grid-cols-2 sm:py-16">
          <div className="mt-4 md:mt-0 text-left flex  ">
                  <div className="my-auto mx-6">
                    
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r text-transparent from-blue-300 to-green-900 bg-clip-text">About me</h2>
            <p className='text-base font-sans  lg:text-lg'>
             
            My journey in web development began with a fascination for how technology can transform ideas into interactive realities. Over the years, I've immersed myself in the ever-evolving landscape of front-end technologies, constantly learning and adapting to stay ahead of the curve. From responsive design principles to the latest JavaScript frameworks like React , I thrive on pushing the boundaries of what's possible in web development.
            </p>
              </div>
              </div>
              <img className='mx-auto rounded-2xl py-8 md:py-0' src={images} width={300} height={300} alt="" />
          </div> 

      </div>
      </ScrollReveal>
  )
}

export default About
