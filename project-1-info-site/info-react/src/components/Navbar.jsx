import logo from "../assets/react.svg"
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <h1>ReactFacts</h1>
      </div>
      <h2>Aritra Saha</h2>
    </nav>
  )
}
export default Navbar
