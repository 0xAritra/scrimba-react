import { FaGithubSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa"
const Footer = () => {
  const iconStyles = {
    fontSize: "1.5rem",
    margin: "1rem 0.5rem",
  }
  return (
    <div className="footer">
      <a href="https://github.com/0xAritra">
        <FaGithubSquare style={iconStyles} />
      </a>

      <a href="https://twitter.com/0xAritra">
        <FaTwitterSquare style={iconStyles} />
      </a>

      <a href="https://www.linkedin.com/in/0xAritra">
        <FaLinkedin style={iconStyles} />
      </a>
    </div>
  )
}
export default Footer
