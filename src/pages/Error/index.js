import "./error.css";
import e404 from "../../images/e404.png";
import teamRocket from "../../images/teamRocket.png";

export default function Error() {
  return (
    <div className="errorContainer">
      <div className="images">
        <img src={e404} alt="Error 404" className="background" />
        <img src={teamRocket} alt="teamRocket" className="rocketTeamImg" />
      </div>
      <h1>
        The rocket team <span>has won this time.</span>
      </h1>
      <button>return</button>
    </div>
  );
}
