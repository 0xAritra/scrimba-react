// import athleteImg from "../assets/athlete.png"
import starImg from "../assets/star.png"

const Card = ({ coverImg, stats, location, title, price, openSpots }) => {
  let badgeText
  if (!openSpots) badgeText = "SOLD OUT"
  else if (location == "Online") badgeText = "ONLINE"

  return (
    <div className="card">
      {badgeText && <div className="status">{badgeText}</div>}
      <img src={"/img/" + coverImg} alt={coverImg} />
      <div className="ratings">
        <img src={starImg} alt="star" />
        <span className="rating"> {stats.rating}</span>{" "}
        <span className="rating-nos">({stats.reviewCount})</span> -{" "}
        <span className="country">{location}</span>
      </div>
      <div className="lesson">
        <h3>{title}</h3>
        <p>
          <span>From ${price} </span> / per person
        </p>
      </div>
    </div>
  )
}
export default Card
