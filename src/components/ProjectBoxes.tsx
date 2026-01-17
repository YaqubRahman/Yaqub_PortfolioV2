import PlaneMainMenu from "../assets/projectassets/planemainmenu.png";
import KNearest from "../assets/projectassets/K-Nearest.png";
import DecisionTree from "../assets/projectassets/DecisionTree.png";
import SwiftdIn from "../assets/projectassets/SwiftdIn.png";
import PrayerApp from "../assets/projectassets/PrayerApp.png";
import Portfolio from "../assets/projectassets/PortfolioProjectImage2.png";
import UniStreetFighter from "../assets/projectassets/UniStreetFighter.png";
import MontageAI from "../assets/projectassets/MontageAI.png";
import F1Image from "../assets/projectassets/F1Image.jpg";

const projects = [
  {
    title: "Montage AI",
    description: `A video editing software
                  with AI intetegration to
                  automate tedious tasks of
                  video editing.`,
    image: MontageAI,
  },
  {
    title: "F1 Strategy Predictor",
    description: `A machine learning model
                  which predicts the best
                  strategy for a Formula 1 race.
                  Uses data from FastF1 library.`,
    image: F1Image,
  },
  {
    title: "University Street Fighter Game",
    description: `A Java game that uses City Engine.
                  A fighting game with my uni friends
                  as characters.`,
    image: UniStreetFighter,
  },
  {
    title: "Portfolio Website",
    description: `Where have I seen this before hmm...`,
    image: Portfolio,
  },
  {
    title: "SwiftdIn Full Stack App",
    description: `A full stack web application which uses React, JavaScript and
              MongoDB. SwiftdIn is a LinedIn
              like clone.`,
    image: SwiftdIn,
  },
  {
    title: "Prayer App",
    description: `A Kotlin App, collaborated with a
              team, using API's to fetch prayer times.`,
    image: PrayerApp,
  },
  {
    title: "K-Nearest Neighbours ML",
    description: `A machine learning model
              which classifies data points
              using the K-Nearest Neighbours
              algorithm.`,
    image: KNearest,
  },
  {
    title: "Decision Tree ML",
    description: `A machine learning model
              which classifies data using
              the decision tree algorithm.`,
    image: DecisionTree,
  },

  {
    title: "YR13 NEA Game",
    description: `A python game which uses
              pygame. Developed using an agile
              methodology and uses the
              principles of SUVAT from physics.`,
    image: PlaneMainMenu,
  },
];

function ProjectBoxes() {
  return (
    <div>
      <p className="read-the-docs">Still work in progress!</p>
      <div className="boxflex">
        {projects.map((x) => (
          <div className="box">
            <h1 className="title">{x.title}</h1>
            <div className="pythonlogo">
              <p>{x.description}</p>
            </div>
            <img src={x.image} className="image" alt={x.title.toLowerCase()} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectBoxes;
