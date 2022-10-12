import "../Styles/Main_body.css";
import video from "../img/video.mp4";

function Mainbody() {
  return (
    <>
      <video autoPlay loop muted className="videos">
        <source src={video} type="video/mp4" />
      </video>
      s
    </>
  );
}

export default Mainbody;
