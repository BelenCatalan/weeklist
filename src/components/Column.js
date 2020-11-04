import React from 'react'
import Task from './Task'
import {Droppable} from 'react-beautiful-dnd';

function Column (props) {
  console.log(props);
  console.log(props.tasks);
  return (
    <div className="column__column">
      <h3 className="column__h3">{props.column.title}</h3>
      <Droppable droppableId={props.column.id}>
{provided =>( //provided is an object
      < ul className="column__ul" ref = {provided.innerRef}{...provided.droppableProps}>

        {
        props.tasks.map((task, index) => <Task key={task.id} task={task} index={index}/>
          )
        }
      </ul>
)}
      </Droppable>
    </div>
  )
}

export default Column;
