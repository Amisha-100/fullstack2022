const Course = ({ course }) => {
    var total = course.parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
        <div>
            <h3>{course.name}</h3>
            {course.parts.map(part => <p key={part.id}>{part.name} {part.exercises} </p>)}
            <h4>total of {total} exercises</h4>
        </div>
    )
}

export default Course
