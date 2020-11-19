import React from 'react'
import {Draggable} from 'react-beautiful-dnd';

const TaskList = (props) => {

  const handleClose = (event) =>{
    props.handleButtonClose ({
      value: event.target.value,
      id: event.target.id,
      columnStart: event.target.name,
      
    }
    
    )
    
  }

  return (
    
    <Draggable draggableId={props.task.id} index={props.index}>
{(provided, snapshot)=>(

<li className={`${"task__li"} ${"js-button"} ${snapshot.isDragging ? "task__dragTrue": "task__dragFalse"}`} ref={provided.innerRef} {...provided.draggableProps}{...provided.dragHandleProps} isdragging={snapshot.isDragging} >
  


  {props.task.content}
  <div><button onClick={handleClose} id={props.task.id} value={props.task.content} name={props.task.columnStart}>x</button></div>

  
     </li>

)}
    </Draggable>
)
  
}

export default TaskList