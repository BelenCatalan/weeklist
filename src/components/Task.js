import React from 'react'
import {Draggable} from 'react-beautiful-dnd';

const Task = (props) => {
  console.log(props);

  const handleInputDish = (event) =>{
    props.handleChangeDish ({
      value: event.target.value,
      id: event.target.id,

    })
    
  }

  const handleSubmit = (e) => e.preventDefault();

  return (
    <Draggable draggableId={props.task.id} index={props.index}>
{(provided, snapshot)=>(

<li className={`${"task__li"} ${snapshot.isDragging ? "task__dragTrue": "task__dragFalse"}`} ref={provided.innerRef} {...provided.draggableProps}{...provided.dragHandleProps} isdragging={snapshot.isDragging} >
<form onSubmit={handleSubmit}>

<textarea  onChange={handleInputDish} name="dish" id={props.task.id} placeholder={props.task.content} value={props.task.content}/>
</form >
     </li>
)}
    </Draggable>
  )
}

export default Task
// style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
// className={snapshot.isDragging ? "task__dragTrue" : "task_dragFalse"}