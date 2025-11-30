import Images from "../components/Images";
import yaqub2 from "../assets/yaqubpfp3.png";
import biannual from "../assets/biannual.jpeg";
import "../App.css";
import montageailogo from "../assets/montageaibig.png";

function Home() {
  return (
    <>
      <div className="container ">
        <div className="typewriter">
          <h1>Yaqub Rahman</h1>
          <div className="sub-title">
            <h2>Building Montage AI</h2>
            <h2>2nd Year CS Student</h2>
          </div>

          <a href="https://montageai.co.uk" target="_blank">
            <img
              src={montageailogo}
              className="soukai scroll-content scroll-container"
              alt="soukai logo"
            />
          </a>
        </div>
        <div className="content">
          <img src={yaqub2} className="yaqub" alt="yaqub pfp" />
        </div>
      </div>
      <Images />
      <div className="card">
        <div className="hero-title ">
          <p>Hi, I am a second year Computer Science undergraduate</p>
        </div>

        <div className="herowords-title herotextcontainer">
          <p>
            <br></br>"Precise"<br></br>
            <br></br>"Hardworking"<br></br>
            <br></br>"Adaptable"<br></br>
            <br></br>"Resilient"
          </p>

          <div className="hero-image herotextcontent ">
            <a
              href="https://lyonian-association.org/news/events/229/229-OLs-return-for-the-CCF-Biennial-Inspection"
              target="_blank"
            >
              <img src={biannual} className="biannual" alt="biannual" />
            </a>
          </div>
        </div>

        <div className="hero-subtitle">
          <p></p>
        </div>

        <p className="read-the-docs">
          Click on the logos and images to learn more
        </p>
      </div>
    </>
  );
}

export default Home;
