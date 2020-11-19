import React from 'react'
import Taskfood from './Taskfood'
import TaskList from './TaskList'
import {Droppable} from 'react-beautiful-dnd';

function Columnfood (props) {
 
 if((props.column.id === "column-6" && props.column.taskIds.length !== 0)||(props.column.id === "column-7" && props.column.taskIds.length !== 0)||(props.column.id === "column-8" && props.column.taskIds.length !== 0)){
  return (
    <div className="column__column">
      <h3 className="column__h3">{props.column.title}</h3>
      <Droppable droppableId={props.column.id} isDropDisabled={props.isDropDisabled}>
{(provided, snapshot) =>( //provided is an object
      < ul className={`${"column__ul"} ${snapshot.isDraggingOver ? "column__dragTrue" : "column__dragFalse"}`} ref = {provided.innerRef}{...provided.droppableProps} isdraggingover={snapshot.isDraggingOver}>

        {
        props.tasks.map((task, index) => <TaskList className="js-button" key={task.id} task={task} index={index} weekColumns={props.weekColumns} handleButtonClose={props.handleButtonClose}/>
        
        
          )
        }
        
 {provided.placeholder}
      </ul>
)}
      </Droppable>
    </div>
  )
      }
      else{
        return (
          <div className="column__column">
            <h3 className="column__h3">{props.column.title}</h3>
            <Droppable droppableId={props.column.id} isDropDisabled={props.isDropDisabled}>
      {(provided, snapshot) =>( //provided is an object
            < ul className={`${"column__ul"} ${snapshot.isDraggingOver ? "column__dragTrue" : "column__dragFalse"}`} ref = {provided.innerRef}{...provided.droppableProps} isdraggingover={snapshot.isDraggingOver}>
      
              {
              props.tasks.map((task, index) => <Taskfood className="js-button" key={task.id} task={task} index={index} weekColumns={props.weekColumns}/>
                )
              }
       {provided.placeholder}
            </ul>
      )}
            </Droppable>
          </div>
        )
      }
}

export default Columnfood;