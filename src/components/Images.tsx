import stemmLogo from "../assets/stemm.jpg";
import awsLogo from "../assets/aws.jpeg";
import dstLogo from "../assets/dst.png";
import encodeLogo from "../assets/encode_club_logo.jpg";
import scoutsLogo from "../assets/scouts.png";
import ccfLogo from "../assets/ccf.jpg";
import phsLogo from "../assets/PHS.jpg";
import tcsLogo from "../assets/tcs.jpg";
import cityLogo from "../assets/city.png";
import coinruleLogo from "../assets/coinrule.png";
import cur8Logo from "../assets/Cur8.png";

function Images() {
  return (
    <div>
      <a href="https://stemmuslims.org/" target="_blank">
        <img
          src={stemmLogo}
          className="stemmlogo scroll-content scroll-container"
          alt="stemm pfp"
        />
      </a>
      <a href="https://aws.amazon.com/" target="_blank">
        <img
          src={awsLogo}
          className="aws scroll-content scroll-container"
          alt="aws logo"
        />
      </a>
      <a
        href="https://www.gov.uk/government/organisations/defence-science-and-technology-laboratory"
        target="_blank"
      >
        <img
          src={dstLogo}
          className="dst scroll-content scroll-container"
          alt="dst logo"
        />
      </a>
      <a href="https://www.encode.club/" target="_blank">
        <img
          src={encodeLogo}
          className="encode scroll-content scroll-container"
          alt="encode logo"
        />
      </a>
      <a href="https://www.scouts.org.uk/" target="_blank">
        <img
          src={scoutsLogo}
          className="scouts scroll-content scroll-container"
          alt="scouts logo"
        />
      </a>
      <a href="https://combinedcadetforce.org.uk/" target="_blank">
        <img
          src={ccfLogo}
          className="ccf scroll-content scroll-container"
          alt="ccf logo"
        />
      </a>
      <a href="https://www.pinnerhighschool.org/" target="_blank">
        <img
          src={phsLogo}
          className="phs scroll-content scroll-container"
          alt="phs logo"
        />
      </a>
      <a
        href="https://www.tcs.com/what-we-do/services/cybersecurity"
        target="_blank"
      >
        <img
          src={tcsLogo}
          className="tcs scroll-content scroll-container"
          alt="tcs logo"
        />
      </a>
      <a href="https://www.city.ac.uk/" target="_blank">
        <img
          src={cityLogo}
          className="city scroll-content scroll-container"
          alt="city logo"
        />
      </a>

      <a href="https://coinrule.com/" target="_blank">
        <img
          src={coinruleLogo}
          className="coinrule scroll-content scroll-container"
          alt="coinrule logo"
        />
      </a>

      <a href="https://cur8.capital/" target="_blank">
        <img
          src={cur8Logo}
          className="cur8 scroll-content scroll-container"
          alt="cur8capital logo"
        />
      </a>
    </div>
  );
}

export default Images;
