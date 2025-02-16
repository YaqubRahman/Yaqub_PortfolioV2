import PlaneMainMenu from '../assets/projectassets/planemainmenu.png'
import KNearest from '../assets/projectassets/K-Nearest.png'
import Fractal from '../assets/projectassets/FractalPlotting.png'
import DecisionTree from '../assets/projectassets/DecisionTree.png'
import ShoppingList from '../assets/projectassets/ShoppingList.png'
import WeatherApp from '../assets/projectassets/WeatherApp.png'
import SwiftdIn from '../assets/projectassets/SwiftdIn.png'
import PrayerApp from '../assets/projectassets/PrayerApp.png'

function ProjectBoxes(){
    return(
        <div>
              <p className="read-the-docs">
        Still work in progress!
      </p>
            <div className="boxflex">
                <div className="box">
                    <h1 className='title'>YR13 NEA Game</h1>
                    <div className="pythonlogo">
                        <p>A python game which uses<br></br>
                         pygame. Developed using an agile<br></br>
                         methodology and uses the<br></br>
                          principles of SUVAT from physics.</p>
                    </div>
                    <img src={PlaneMainMenu} className="image" alt="plainmainmenu" />
                </div>
                
                <div className="box">
                    <h1 className='title'>K-Nearest Neighbours ML</h1>
                    <img src={KNearest} className="image" alt="knearest" />
                </div>

                <div className="box">
                    <h1 className='title'>Fractal Plotting</h1>
                    <img src={Fractal} className="image" alt="fractal" />
                </div>

                <div className="box">
                    <h1 className='title'>SwiftdIn Full Stack App</h1>
                    <div className="pythonlogo">
                        <p>A full stack web application which uses React, JavaScript and MongoDB. SwiftdIn
                          is a LinedIn<br></br>
                           like clone.</p>

                    </div>
                    <img src={SwiftdIn} className="image" alt="plainmainmenu" />
                </div>

                <div className="box">
                    <h1 className='title'>Decision Tree ML</h1>
                    <img src={DecisionTree} className="image" alt="decisiontree" />
                </div>

                <div className="box">
                    <h1 className='title'>Prayer App</h1>
                    <div className="pythonlogo">
                        <p>A Kotlin App, collaborated with a<br></br> 
                         team, using API's to fetch prayer times.</p>
                    </div>
                    <img src={PrayerApp} className="image" alt="prayerapp" />
                </div>

                <div className="box">
                    <h1 className='title'>Shopping List App</h1>
                    <img src={ShoppingList} className="image" alt="shoppinglist" />
                </div>

                <div className="box">
                    <h1 className='title'>Weather Web App</h1>
                    <img src={WeatherApp} className="image" alt="weatherapp" />
                </div>

                <div className="box">
                    <h1 className='title'>This website :)</h1>
                </div>

            </div>
        </div>
    )
}

export default ProjectBoxes;
