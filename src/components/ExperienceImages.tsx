import Encode from '../assets/experienceassets/EncodeHackathon.jpg'
import CCF from '../assets/experienceassets/CCFAward.jpg'
import SoukAI from '../assets/experienceassets/SoukAI.jpg'
import Imperial from '../assets/experienceassets/ImperialHackathon.jpg'
import Headstudent from '../assets/experienceassets/headstudent.jpg'
import Awsevent from '../assets/experienceassets/awsevent.jpg'
import Robotics from '../assets/experienceassets/Robotics.jpg'
import './Experience.css'


function ExperienceImages(){
    return(
        <div>
        <div className="card">
        <div className='experiencehero-title'>
        <p>Imperial Hackathon Winner Summer '24</p>
        </div>
        <div className="experiencehero-subtitle">
            <p>June 2024</p>
        </div>
        </div>

        <img src={Imperial} className="encodeexperience" alt="imperial" />


        <div className="card">
        <div className='experiencehero-title'>
        <p>CCF Staff Sergeant</p>
        </div>
        <div className="experiencehero-subtitle">
            <p>2019-2024</p>
        </div>

        </div>


        <img src={CCF} className="encodeexperience" alt="ccf" />



        <div className="card">
        <div className='experiencehero-title'>
        <p>2nd Place Robotics End Of Line Competition</p>
        </div>
        <div className="experiencehero-subtitle">
            <p>Sep - Dec 2024</p>
        </div>

        </div>


        <img src={Robotics} className="encodeexperience" alt="robotics" />






        <div className="card">
        <div className='experiencehero-title'>
        <p>Encode Hackathon/Conference</p>
        </div>
        <div className="experiencehero-subtitle">
            <p>Oct 2024</p>
        </div>
        </div>

        <img src={Encode} className="encodeexperience" alt="encodeexperience" />


        <div className="card">
        <div className='experiencehero-title'>
        <p>Souk AI Startup Intern</p>
        </div>
        <div className="experiencehero-subtitle">
            <p>Oct 2024-Present</p>
        </div>
        </div>
            <img src={SoukAI} className="encodeexperience" alt="soukai" />


        <div className="card">
        <div className='experiencehero-title'>
        <p>AWS Immersion Day</p>
        </div>
        <div className="experiencehero-subtitle">
            <p>Oct 2024</p>
        </div>
        </div>


        <img src={Awsevent} className="encodeexperience" alt="awsevent" />
        
        <div className="card">
        <div className='experiencehero-title'>
        <p>Pinner High School Head Boy</p>
        </div>
        <div className="experiencehero-subtitle">
            <p>2023-2024</p>
        </div>
        </div>

        <img src={Headstudent} className="encodeexperience" alt="headstudent" />
        
        <div className="card">
        <div className='experiencehero-title '>
        <p>Scouts Leader</p>
        </div>
        <div className="experiencehero-subtitle">
            <p>2022-Present</p>
        </div>
        </div>

        
        <div className="card">
        <div className='experiencehero-title'>
        <p>TCS Cybersecurity Work Experience</p>
        </div>
        <div className="experiencehero-subtitle">
            <p>June 2023</p>
        </div>
        </div>
        
        
        <div className="card">
        <div className='experiencehero-title'>
        <p>DSTL Work Experience</p>
        </div>
        <div className="experiencehero-subtitle">
            <p>Feb 2021</p>
        </div>
        </div>


        </div>
    )

}

export default ExperienceImages;