import React from 'react'

const Task = (props) => {



  console.log(props);
  return (
    <li className ="task__li">{props.task.content}
     </li>
  )
}

export default Task
