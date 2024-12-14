import PlaneMainMenu from '../assets/projectassets/planemainmenu.png'
import KNearest from '../assets/projectassets/K-Nearest.png'
import Fractal from '../assets/projectassets/FractalPlotting.png'
import DecisionTree from '../assets/projectassets/DecisionTree.png'
import ShoppingList from '../assets/projectassets/ShoppingList.png'

function ProjectBoxes(){
    return(
        <div>
            <div className="boxflex">
                <div className="box">
                    <h1 className='title'>YR13 NEA Game</h1>
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
                    <h1 className='title'>Decision Tree ML</h1>
                    <img src={DecisionTree} className="image" alt="decisiontree" />
                </div>

                <div className="box">
                    <h1 className='title'>Shopping List App</h1>
                    <img src={ShoppingList} className="image" alt="shoppinglist" />
                </div>

            </div>
        </div>
    )
}

export default ProjectBoxes;
