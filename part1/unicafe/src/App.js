import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  let total = props.good + props.neutral + props.bad
  if (!total) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <StatisticLine text='good' value={props.good} />
          </tr>
          <tr>
            <StatisticLine text='neutral' value={props.neutral} />
          </tr>
          <tr>
            <StatisticLine text='bad' value={props.bad} />
          </tr>
          <tr>
            <StatisticLine text='all' value={props.good + props.neutral + props.bad} />
          </tr>
          <tr>
            <StatisticLine text='average' value={(props.good + props.neutral + props.bad)/3} />
          </tr>
          <tr>
            <StatisticLine text='positive' value={(props.good)/(props.neutral + props.bad)} />
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const StatisticLine = (props) => {
  return (
    <>
      <td>
        {props.text} 
      </td>
      <td>
        {props.value}
      </td>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App