

const App = () => {
  const course = {
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
        name: 'Reduxt',
        exercises: 11,
        id: 4
      }
    ]
  }

  const Course = (props) => {
    
    const Header = (props) => {
      return (<h1>{props.name}</h1>)
    }
    const Part = (props) => {
      return (
          <p>{props.part} {props.exercises}</p>
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
        <p>total of {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises + props.course.parts[3].exercises}</p>
      </div>
    )
  }
  return (
    <>
    <Course course={course} />
    </>

  )
}

export default App
