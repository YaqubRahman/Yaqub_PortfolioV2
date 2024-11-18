import stemmLogo from '../assets/stemm.jpg'
import awsLogo from '../assets/aws.jpeg'
import dstLogo from '../assets/dst.png' 
import encodeLogo from '../assets/encode_club_logo.jpg' 
import scoutsLogo from '../assets/scouts.png' 
import ccfLogo from '../assets/ccf.jpg' 
import phsLogo from '../assets/PHS.jpg'

function Images(){
    return(
        <div>
        <a href="https://stemmuslims.org/" target="_blank">
        <img src={stemmLogo} className="stemmlogo scroll-content scroll-container" alt="stemm pfp" />
        <img src={awsLogo} className="aws scroll-content scroll-container" alt="aws logo" />
        <img src={dstLogo} className="dst scroll-content scroll-container" alt="dst logo" />
        <img src={encodeLogo} className="encode scroll-content scroll-container" alt="encode logo" />
        <img src={scoutsLogo} className="scouts scroll-content scroll-container" alt="scouts logo" />
        <img src={ccfLogo} className="ccf scroll-content scroll-container" alt="ccf logo" />
        <img src={phsLogo} className="phs scroll-content scroll-container" alt="phs logo" />
        
        </a>

        </div>
    )

}

export default Images;
