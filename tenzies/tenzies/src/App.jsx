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
    return dices
  }

  function onRoll() {
    setDices(allNewDice())
  }

  return (
    <main className="main">
      <div className="dice">
        {dices.map((die) => (
          <Die key={die.id} value={die.value} />
        ))}
      </div>
      <button className="roll-btn" onClick={onRoll}>
        Roll
      </button>
    </main>
  )
}

export default App
