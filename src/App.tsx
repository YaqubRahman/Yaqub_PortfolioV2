import { useState } from 'react'

import Images from './components/Images'
import yaqub from './assets/yaqubpfp.jpg'
import biannual from './assets/biannual.jpeg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
      <h1>Yaqub Rahman</h1>
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
        <img src={biannual} className="biannual" alt="biannual" />
        </div>
        </div>

        <div className='hero-subtitle'>
        <p>With a strong foundation in computer science</p>
        </div>

    


        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App


