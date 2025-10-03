//Exercise 1.9
import { useState } from 'react'

const StatisticLine = (props) => {
  return (
    <p>{props.text} {props.value}</p>
  )
}

const Statistics = (props) => {
  return (
    <div>
      <h1>statistics</h1>
      <StatisticLine text={"good: "} value={props.good}/>
      <StatisticLine text={"neutral: "} value={props.neutral} />
      <StatisticLine text={"bad: "} value={props.bad} />
      <StatisticLine text={"all: "} value={props.total} />
      <StatisticLine text={"average: "} value={(((props.good * props.goodVal) + (props.neutral * props.neutralVal) + (props.bad * props.badVal)) / props.total)} />
      <StatisticLine text={"positive: "} value={(((props.good * props.goodVal) / props.total) * 100)} />
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
      {good || neutral || bad ? <Statistics good={good} neutral={neutral} bad={bad} total={total} goodVal={goodVal} neutralVal={neutralVal} badVal={badVal}/> : <h5>no feedback given</h5>}
    </div>
  )
}

export default App