import React from 'react'
import Task from './Task'
import {Droppable} from 'react-beautiful-dnd';

function Column (props) {
 
  return (
    <div className="column__column">
      <h3 className="column__h3">{props.column.title}</h3>
      <Droppable droppableId={props.column.id}>
{(provided, snapshot) =>( //provided is an object
      < ul className={`${"column__ul"} ${snapshot.isDraggingOver ? "column__dragTrue" : "column__dragFalse"}`} ref = {provided.innerRef}{...provided.droppableProps} isdraggingover={snapshot.isDraggingOver}>

        {
        props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} handleChangeDish={props.handleChangeDish}/>
          )
        }
         {provided.placeholder}
      </ul>
)}
      </Droppable>
    </div>
  )
}

export default Column;
