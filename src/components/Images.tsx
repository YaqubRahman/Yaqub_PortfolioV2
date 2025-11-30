import python from "../assets/icons/python.png";
import java from "../assets/icons/java.png";
import typescript from "../assets/icons/typescript.png";
import cpp from "../assets/icons/cpp.png";
import scoutsLogo from "../assets/scouts.png";
import ccfLogo from "../assets/ccf.jpg";
import phsLogo from "../assets/PHS.jpg";
import docker from "../assets/icons/docker.png";
import cityLogo from "../assets/city.png";
import coinruleLogo from "../assets/coinrule.png";
import cur8Logo from "../assets/Cur8.png";
import montageaiLogo from "../assets/montageaibig.png";

function Images() {
  return (
    <div>
      <a target="_blank">
        <img
          src={python}
          className="stemmlogo scroll-content scroll-container"
          alt="stemm pfp"
        />
      </a>
      <a target="_blank">
        <img
          src={java}
          className="aws scroll-content scroll-container"
          alt="aws logo"
        />
      </a>
      <a target="_blank">
        <img
          src={typescript}
          className="dst scroll-content scroll-container"
          alt="dst logo"
        />
      </a>
      <a target="_blank">
        <img
          src={cpp}
          className="encode scroll-content scroll-container"
          alt="encode logo"
        />
      </a>
      <a target="_blank">
        <img
          src={docker}
          className="tcs scroll-content scroll-container"
          alt="tcs logo"
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

      <a href="https://montageai.framer.website/" target="_blank">
        <img
          src={montageaiLogo}
          className="encode scroll-content scroll-container"
          alt="montageai logo"
        />
      </a>
    </div>
  );
}

export default Images;
