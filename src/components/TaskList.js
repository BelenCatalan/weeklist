import React from 'react'
import {Draggable} from 'react-beautiful-dnd';

const TaskList = (props) => {

 

  return (
    
    <Draggable draggableId={props.task.id} index={props.index}>
{(provided, snapshot)=>(

<li className={`${"task__li"} ${"js-button"} ${snapshot.isDragging ? "task__dragTrue": "task__dragFalse"}`} ref={provided.innerRef} {...provided.draggableProps}{...provided.dragHandleProps} isdragging={snapshot.isDragging} >
  


  {props.task.content}
  <div><button>x</button></div>

  
     </li>

)}
    </Draggable>
)
  
}

export default TaskList