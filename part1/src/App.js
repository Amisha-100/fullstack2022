const User = (user) => {
  return (
    <div>
      {user.name} is learning React!
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <h1>
        <User name="Amisha" />
      </h1>
      <div>
        <h2>{course}</h2>
        <p>
          {part1}: {exercises1}
        </p>
        <p>
          {part2}: {exercises2}
        </p>
        <p>
          {part3}: {exercises3}
        </p>
        <p>Number of exercises: {exercises1 + exercises2 + exercises3}</p>
      </div>
      <h5>
        <Footer/>
      </h5>
    </>
  )
}


const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/Amisha-100'>amisha</a>
    </div>
  )
}

export default App