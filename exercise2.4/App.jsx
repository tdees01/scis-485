

const App = () => {
  const courses = [
    {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }, 
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]
  const Course = (props) => {
    
    const Header = (props) => {
      return (<h1>{props.name}</h1>)
    }
    const Part = (props) => {
      return (
        <>
          <p>{props.courses.part} {props.exercises}</p>
        </>
      )
    }
    const Content = (props) => {
      return (
        <div>
          {props.parts.map(part => (
            <Part key={part.id} part={part.name} exercises={part.exercises} />
          ))}
        </div>
      )
    }

    return (
      <div>
        <Header name={props.course.name} />
        <Content parts={props.course.parts} />
        <p>total of {props.course.parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</p>
      </div>
    )
  }
  return (
    <>
    {courses.map(course => (
      <Course key={course.id} course={course} />
    ))}
    </>

  )
}

export default App
