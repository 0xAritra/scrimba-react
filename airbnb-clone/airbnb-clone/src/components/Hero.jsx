import heroGrid from "../assets/hero-grid.png"

const Hero = () => {
  return (
    <div className="hero">
      <img src={heroGrid} alt="" />
      <div>
        <h2>Online Experiences</h2>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  )
}
export default Hero
