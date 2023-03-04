import { useState } from 'react'

var points = new Array(8).fill(0)

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const MaxVote = (props) => {
  let index = points.indexOf(Math.max(...points))
  return(
    <div>
      {props.data[index]}
      <br />
      has {points[index]} votes
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(0)

  const pickRandom = () => {
    setSelected(Math.floor(Math.random() * 8))
  }

  const vote = () => {
    setVotes(votes + 1)
    points[selected] = points[selected] + 1
  }

  return (
    <div>
      <h3>Anecdote of the day</h3>
      {anecdotes[selected]}
      <br/>
      <Button handleClick={vote} text='vote' />
      <Button handleClick={pickRandom} text='next anecdote' />
      <br/>
      has {points[selected]} votes

      <h3>Anecdote with most votes</h3>
      <MaxVote data={anecdotes}/>
    </div>
  )
}

export default App