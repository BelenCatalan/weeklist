import React from 'react'
import {Draggable} from 'react-beautiful-dnd';

const Taskfood = (props) => {
  

  return (
    
    <Draggable draggableId={props.task.id} index={props.index}>
{(provided, snapshot)=>(

<li className={`${"task__li"} ${"js-button"} ${snapshot.isDragging ? "task__dragTrue": "task__dragFalse"}`} ref={provided.innerRef} {...provided.draggableProps}{...provided.dragHandleProps} isdragging={snapshot.isDragging} >
  


  {props.task.content}
  
  
     </li>

)}
    </Draggable>
  
  )
}

export default Taskfood