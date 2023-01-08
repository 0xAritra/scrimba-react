import { FaMapMarkerAlt } from "react-icons/fa"

const Journal = ({ data }) => {
  return (
    <div className="journal">
      <img src={data.imageUrl} alt="" />
      <div className="details">
        <div className="location">
          <FaMapMarkerAlt style={{ color: "#f55a5a" }} />{" "}
          <span>{data.location}</span>
          {"          "}
          <a href={data.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h2>{data.title}</h2>
        <h3>
          {data.startDate} - {data.endDate}
        </h3>
        <p>{data.description}</p>
      </div>
    </div>
  )
}
export default Journal
