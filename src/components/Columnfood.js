import React from 'react'
import Taskfood from './Taskfood'
import {Droppable} from 'react-beautiful-dnd';

function Columnfood (props) {
  console.log(props);
 
  return (
    <div className="column__column">
      <h3 className="column__h3">{props.column.title}</h3>
      <Droppable droppableId={props.column.id} isDropDisabled={props.isDropDisabled}>
{(provided, snapshot) =>( //provided is an object
      < ul className={`${"column__ul"} ${snapshot.isDraggingOver ? "column__dragTrue" : "column__dragFalse"}`} ref = {provided.innerRef}{...provided.droppableProps} isdraggingover={snapshot.isDraggingOver}>

        {
        props.tasks.map((task, index) => <Taskfood key={task.id} task={task} index={index} weekColumns={props.weekColumns}/>
          )
        }
 {provided.placeholder}
      </ul>
)}
      </Droppable>
    </div>
  )
}

export default Columnfood;