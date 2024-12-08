import Images from '../components/Images'
import yaqub from '../assets/yaqubpfp.jpg'
import biannual from '../assets/biannual.jpeg'
import '../App.css'




function Home() {
  return (
    <>
    <div className="container ">
    <div className='typewriter'>
      <h1>Yaqub Rahman</h1>
    </div>
      <div className="content">
      <img src={yaqub} className="yaqub" alt="yaqub pfp" />
      </div>
      </div>
      <Images/>
      <div className="card">
        <div className='hero-title '>
        <p>Hi I am a first year Computer Science undergraduate!</p>
        </div>


        <div className='herowords-title herotextcontainer'>
        <p><br></br>"Disciplined"<br></br><br></br>"Hardworking"<br></br><br></br>"Composed"<br></br><br></br>"Determined"</p>
      

        <div className="hero-image herotextcontent ">
        <a href="https://www.johnlyon.org/ccf-biennial-inspection/" target="_blank">
        <img src={biannual} className="biannual" alt="biannual" />
        </a>
        </div>
        </div>

        <div className='hero-subtitle'>
        <p></p>
        </div>

        <p className="read-the-docs">
        Click on the logos and images to learn more
      </p>
      </div>

    </>
  )
}

export default Home


