const Header = (user) => {
  return (
    <div>
      {user.course} is learning React!
      <hr/>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      {props.parts[0].name} -- {props.parts[0].exercises}
      <br/>
      {props.parts[1].name} -- {props.parts[1].exercises}
      <br/>
      {props.parts[2].name} -- {props.parts[2].exercises}
      <br/>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      Total: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </div>
  )
}

const Footer = () => {
  return (
    <h5>
      greeting app created by <a href='https://github.com/Amisha-100'>amisha</a>
    </h5>
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
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Footer />
    </div>
  )
}

export default App