import React from 'react'
import {Draggable} from 'react-beautiful-dnd';

const Task = (props) => {

  return (
    <Draggable draggableId={props.task.id} index={props.index}>
{(provided)=>(

      <li className ="task__li" ref={provided.innerRef} {...provided.draggableProps}{...provided.dragHandleProps}>{props.task.content}
     </li>
)}
    </Draggable>
  )
}

export default Task
