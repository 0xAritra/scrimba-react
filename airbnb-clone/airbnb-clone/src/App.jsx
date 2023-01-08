import "./App.css"
import Card from "./components/Card"
import Header from "./components/Header"
import Hero from "./components/Hero"

import cardsData from "./data"

function App() {
  return (
    <>
      <Header />
      <Hero />

      {/* PASSING OBJECT AS PROP */}
      <div className="cards">
        {cardsData.map((cardData) => (
          <Card
            key={cardData.id}
            // data={cardData}
            {...cardData}
            // img={cardData.coverImg}
            // rating={cardData.stats.rating}
            // reviewCount={cardData.stats.reviewCount}
            // location={cardData.location}
            // title={cardData.title}
            // price={cardData.price}
            // openSpots={cardData.openSpots}
          />
        ))}
      </div>

      {/*  */}
      {/* <Card
        img="athlete.png"
        rating="5.0"
        reviewCount="6"
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      /> */}
    </>
  )
}

export default App
