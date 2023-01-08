import "./App.css"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Journal from "./components/Journal"
import journalData from "./data"

function App() {
  return (
    <div className="main">
      <Header />

      <div className="journals">
        {journalData.map((data) => (
          <Journal key={data.id} data={data} />
        ))}
      </div>

      <Footer />
    </div>
  )
}

export default App
