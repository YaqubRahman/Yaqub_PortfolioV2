import Encode from "../assets/experienceassets/EncodeHackathon.jpg";
import CCF from "../assets/experienceassets/CCFAward.jpg";
import Imperial from "../assets/experienceassets/ImperialHackathon.jpg";
import Headstudent from "../assets/experienceassets/headstudent.jpg";
import Awsevent from "../assets/experienceassets/awsevent.jpg";
import Robotics from "../assets/experienceassets/Robotics.jpg";
import KCL from "../assets/experienceassets/KCLHackathon.jpg";
import Buildathon from "../assets/experienceassets/Buildathon.jpg";
import MTF from "../assets/experienceassets/MTF.jpg";
import SoukAITeam from "../assets/experienceassets/SoukAITeam.jpg";
import RedwoodFounders from "../assets/experienceassets/RedwoodFounders.jpg";
import RedwoodFounders2 from "../assets/experienceassets/RedwoodFounders2.jpg";
import Cur8 from "../assets/experienceassets/Cur8Capital.jpg";
import GooglePitch1 from "../assets/experienceassets/GooglePitch1.jpg";
import GooglePitch2 from "../assets/experienceassets/GooglePitch2.jpg";
import "./Experience.css";

const experiences = [
  {
    title: "Pitching Montage AI at Google HQ London",
    date: "September 2025",
    images: [GooglePitch1, GooglePitch2],
  },
  {
    title: "Montage AI Co-Founder | Engineer",
    date: "June 2025 - Present",
    images: [],
  },
  {
    title: "Redwood Founders Accelerator Programme",
    date: "June 2025",
    images: [RedwoodFounders, RedwoodFounders2],
  },
  {
    title: "Cur8 Capital SWE Internship",
    date: "June-July 2025",
    images: [Cur8],
  },
  { title: "Muslim Tech Fest 2025", date: "June 2025", images: [MTF] },
  {
    title: "3rd Place Cambridge Joint ISoc Buildathon",
    date: "Feb 2025",
    images: [Buildathon],
    medal: "bronze",
  },
  {
    title: "2nd Place KCL Enactus Hackathon",
    date: "Feb 2025",
    images: [KCL],
    medal: "silver",
  },
  {
    title: "2nd Place Robotics End Of Line Competition",
    date: "Sep - Dec 2024",
    images: [Robotics],
    medal: "silver",
  },
  { title: "Encode Hackathon/Conference", date: "Oct 2024", images: [Encode] },
  {
    title: "Souk AI Startup Software Engineer",
    date: "Oct 2024-Present",
    images: [SoukAITeam],
  },
  { title: "AWS Immersion Day", date: "Oct 2024", images: [Awsevent] },
  {
    title: "1st Place Imperial Hackathon Winner Summer '24",
    date: "June 2024",
    images: [Imperial],
    medal: "gold",
  },
  { title: "CCF Staff Sergeant", date: "2019-2024", images: [CCF] },
  {
    title: "Pinner High School Head Boy",
    date: "2023-2024",
    images: [Headstudent],
  },
  { title: "Scouts Leader", date: "2022-Present", images: [] },
  { title: "TCS Cybersecurity Work Experience", date: "June 2023", images: [] },
  { title: "DSTL Work Experience", date: "Feb 2021", images: [] },
];

function ExperienceImages() {
  return (
    <div>
      <div className="experience-containers">
        {experiences.map((exp, index) => (
          <div key={exp.title} className="experience-containers">
            <div className="experience-cards">
              <div className="experience-title">{exp.title}</div>
              <div className="experience-date">{exp.date}</div>
              {exp.images.length > 0 &&
                exp.images.map((image, imgIndex) => (
                  <img
                    src={image}
                    className="encodeexperience"
                    alt="experience"
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceImages;
