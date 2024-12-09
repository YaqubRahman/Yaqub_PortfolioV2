import Encode from '../assets/experienceassets/EncodeHackathon.jpg'
import CCF from '../assets/experienceassets/CCFAward.jpg'
import SoukAI from '../assets/experienceassets/SoukAI.jpg'
import Imperial from '../assets/experienceassets/ImperialHackathon.jpg'
import Headstudent from '../assets/experienceassets/headstudent.jpg'
import './Experience.css'


function ExperienceImages(){
    return(
        <div>
        <div className="card">
        <div className='experiencehero-title'>
        <p>Imperial Hackathon Winner Summer '24</p>
        </div>
        </div>

        <img src={Imperial} className="encodeexperience" alt="imperial" />


        <div className="card">
        <div className='experiencehero-title'>
        <p>CCF Staff Sergeant</p>
        </div>
        </div>

        <img src={CCF} className="encodeexperience" alt="ccf" />



        <div className="card">
        <div className='experiencehero-title'>
        <p>Amazon Immersion Day</p>
        </div>
        </div>
        
        <div className="card">
        <div className='experiencehero-title'>
        <p>Pinner High School Head Boy</p>
        </div>
        </div>

        <img src={Headstudent} className="encodeexperience" alt="headstudent" />
        
        <div className="card">
        <div className='experiencehero-title '>
        <p>Scouts Leader</p>
        </div>
        </div>

        
        <div className="card">
        <div className='experiencehero-title'>
        <p>TCS Cybersecurity</p>
        </div>
        </div>
        
        
        <div className="card">
        <div className='experiencehero-title'>
        <p>DSTL Work Experiencessssssss</p>
        </div>
        </div>

            <img src={Encode} className="encodeexperience" alt="encodeexperience" />
            <img src={SoukAI} className="encodeexperience" alt="soukai" />


        </div>
    )

}

export default ExperienceImages;