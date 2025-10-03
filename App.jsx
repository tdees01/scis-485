//Exercise 1.6 & 1.7
import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  let goodVal = 1.0
  let neutralVal = 0.0
  let badVal = -1.0
  let total = good + neutral + bad

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <div>
        <h1>statistics</h1>
        <p>good: {good}</p>
        <p>neutral: {neutral}</p>
        <p>bad: {bad}</p>
        <p>all: {good + neutral + bad}</p>
        <p>average: {(((good * goodVal) + (neutral * neutralVal) + (bad * badVal)) / total)}%</p>
        <p>positive: {(((good * goodVal) / total) * 100)}%</p>
      </div>
    </div>
  )
}

export default App
