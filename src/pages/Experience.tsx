import { useState } from 'react'

import Images from '../components/Images'
import yaqub from '../assets/yaqubpfp.jpg'
import biannual from '../assets/biannual.jpeg'
import '../App.css'


function Experience() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
      <h1>Experience </h1>
      </div>
      <Images/>
      <div className="card">
        <div className='hero-title '>
        <p>Imperial Hackathon Winner Summer '24</p>
        <p>Amazon Immersion Day</p>
        <p>CCF Staff Sergeant</p>
        <p>Pinner High School Head Boy</p>
        <p>Scouts Leader</p>
        <p>TCS Cybersecurity</p>
        <p>DSTL Work Experience</p>
        </div>


        <div className='hero-subtitle'>
        <p></p>
        </div>

        <p className="read-the-docs">
        Click on the logos and images to learn more
      </p>

        <button onClick={() => setCount((count) => count + 1)}>
          Scroll up
        </button>
      </div>

    </>
  )
}

export default Experience


