import React from 'react'
import Task from './Task'

function Column (props) {
  console.log(props);
  console.log(props.tasks);
  return (
    <div className="column__column">
      <h3 className="column__h3">{props.column.title}</h3>
      < ul className="column__ul">{
        props.tasks.map(task => <Task key={task.id} task={task}/>
          )
        }
      </ul>
    </div>
  )
}

export default Column;
