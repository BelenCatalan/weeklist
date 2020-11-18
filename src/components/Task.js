import React from 'react'
import {Draggable} from 'react-beautiful-dnd';

const Task = (props) => {

  return (
    <Draggable draggableId={props.task.id} index={props.index}>
{(provided, snapshot)=>(

<li className={`${"task__li"} ${snapshot.isDragging ? "task__dragTrue": "task__dragFalse"}`} ref={provided.innerRef} {...provided.draggableProps}{...provided.dragHandleProps} isdragging={snapshot.isDragging} >{props.task.content}

     </li>
)}
    </Draggable>
  )
}

export default Task
// style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
// className={snapshot.isDragging ? "task__dragTrue" : "task_dragFalse"}