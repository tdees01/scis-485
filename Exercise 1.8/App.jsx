//Exercise 1.8
import { useState } from 'react'

const Statistics = (props) => {
  return (
    <div>
      <h1>statistics</h1>
      <p>good: {props.good}</p>
      <p>neutral: {props.neutral}</p>
      <p>bad: {props.bad}</p>
      <p>all: {props.good + props.neutral + props.bad}</p>
      <p>average: {(((props.good * props.goodVal) + (props.neutral * props.neutralVal) + (props.bad * props.badVal)) / props.total)}%</p>
      <p>positive: {(((props.good * props.goodVal) / props.total) * 100)}%</p>
    </div>

  )
}

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
       <Statistics good={good} neutral={neutral} bad={bad} total={total} goodVal={goodVal} neutralVal={neutralVal} badVal={badVal}/>
      </div>
    </div>
  )
}

export default App
