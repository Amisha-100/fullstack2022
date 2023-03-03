const User = (user) => {
  return (
    <div>
      {user.name} is learning React!
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts.parts} />
      <Total parts={course.parts.length()} />
      <Footer />
    </div>
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