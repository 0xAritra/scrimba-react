import { useState } from "react"
import { nanoid } from "nanoid"

import "./App.css"
import Die from "./components/Die"

function App() {
  const [dices, setDices] = useState(allNewDice())

  function allNewDice() {
    const dices = []
    for (let i = 0; i < 10; i++) {
      dices.push({
        value: Math.floor(Math.random() * 6 + 1),
        isHeld: false,
        id: nanoid(),
      })
    }
    // console.log(dices)
    return dices
  }

  function rollDice() {
    const newDices = allNewDice() // can do better here lol, what if a new func for single die
    setDices((prevDices) => prevDices.map((die, index) => (die.isHeld ? die : newDices[index])))
  }

  function holdDice(id) {
    // console.log(id)
    setDices((prevDices) =>
      prevDices.map((die) => (die.id === id ? { ...die, isHeld: !die.isHeld } : die))
    )
  }

  return (
    <main className="main">
      <div className="dice">
        {dices.map((die) => (
          <Die key={die.id} id={die.id} value={die.value} isHeld={die.isHeld} holdDice={holdDice} />
        ))}
      </div>
      <button className="roll-btn" onClick={rollDice}>
        Roll
      </button>
    </main>
  )
}

export default App
