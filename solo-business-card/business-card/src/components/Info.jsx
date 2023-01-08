import { FaLinkedin, FaEnvelope } from "react-icons/fa"
import ariImg from "../assets/ari.jpg"

const Info = () => {
  return (
    <div className="info">
      <img src={ariImg} alt="" />
      <h1>Aritra Saha</h1>
      <p>Fullstack Developer</p>
      <a href="https://aritra.xyz/">aritra.xyz</a>
      <div className="info-btns">
        <button
          className="btn btn-mail"
          onClick={() => window.open("mailto:as.scjew@simplelogin.co")}
        >
          <FaEnvelope /> <span>Email</span>
        </button>
        <button
          className="btn btn-lin"
          onClick={() =>
            window.open("https://www.linkedin.com/in/0xAritra", "_blank")
          }
        >
          <FaLinkedin /> <span>LinkedIn</span>
        </button>
      </div>
    </div>
  )
}
export default Info
