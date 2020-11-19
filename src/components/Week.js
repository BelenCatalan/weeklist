import React, {useState} from 'react';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import Column from './Column';

let initialData = {
  columns: {
    'column-1':{
      id: 'column-1',
      title: 'Sábado',
      taskIds: ['task-11', 'task-12'],
    },
    'column-2':{
      id: 'column-2',
      title: 'Domingo',
      taskIds: ['task-13', 'task-14'],
    },
    'column-3':{
      id: 'column-3',
      title: 'Lunes',
      taskIds: ['task-1', 'task-2'],
    },
    'column-4':{
      id: 'column-4',
      title: 'Martes',
      taskIds: ['task-3', 'task-4'],
    },
    'column-5':{
      id: 'column-5',
      title: 'Miércoles',
      taskIds: ['task-5', 'task-6'],
    },
    'column-6':{
      id: 'column-6',
      title: 'Jueves',
      taskIds: ['task-7', 'task-8'],
    },
    'column-7':{
      id: 'column-7',
      title: 'Viernes',
      taskIds: ['task-9', 'task-10'],
    },
  },
  tasks: {
    'task-1':{id:'task-1', content:'Garbanzos con calabaza'},
    'task-2':{id:'task-2', content:'Ensalada, lata'},
    'task-3':{id:'task-3', content:'Carne al horno'},
    'task-4':{id:'task-4', content:'Ensalada, tosta aguacate/queso'},
    'task-5':{id:'task-5', content:'spaguetti carbonara'},
    'task-6':{id:'task-6', content:'Ensalda, tortilla'},
    'task-7':{id:'task-7', content:'fideos de arroz'},
    'task-8':{id:'task-8', content:'crema calabaza, lata'},
    'task-9':{id:'task-9', content:'lentejas'},
    'task-10':{id:'task-10', content:'pizza'},
    'task-11':{id:'task-11', content:'fideos de arroz'},
    'task-12':{id:'task-12', content:'crema calabaza, lata'},
    'task-13':{id:'task-13', content:'lentejas'},
    'task-14':{id:'task-14', content:'pizza'},
  },
  columnOrder : ['column-1', 'column-2', 'column-3', 'column-4','column-5','column-6','column-7' ],
};



const Week = () => {
  
  const [weekColumns, setWeekColumns]= useState(initialData);
  console.log(weekColumns);

  //   const paintColumns = () => {
  //     console.log('me estan pintando');
  //     weekColumns.columnOrder.map(columnId=>{
  //       const column = weekColumns.columns[columnId];
  //       const tasks = column.taskIds.map(taskId=>weekColumns.tasks[taskId]);
        
  //       console.log(column.title);
  //     return <Column key={column.id} column={column} tasks={tasks} />;
  //   });
  // };

  const onDragStart = () =>{
    document.body.style.color = 'grey';
  }


  let onDragEnd = (result)=>{
    document.body.style.color='inherit';
    const {destination, source, draggableId} = result
    if (!destination){
      return;
    }
    if(destination.droppableId === source.droppableId && destination.index === source.index){
      return;
    }
    const start = weekColumns.columns[source.droppableId];//que columna es, ampliamos a en que columna empieza
    const finish = weekColumns.columns[destination.droppableId]; // y en qué columna acaba

    if(start === finish){

      const newTaskIds = Array.from(start.taskIds);//nuevo array con sus dos task en este caso
      newTaskIds.splice(source.index, 1);//eliminamos un elemento del array
      newTaskIds.splice(destination.index, 0, draggableId); //colocamos el elemento que viene, no elminamos, sustituimos
      const newColumn = { //creamos una nueva columna con los elementos nuevos para poder pintarla
        ...start,
        taskIds: newTaskIds,
      };
      const newweekColumns = { //hay que sustituir los datos nuevos por los antiguos en el estado
        ...weekColumns,
        columns:{
          ...weekColumns.columns,
          [newColumn.id]:newColumn,
        }
      };
      setWeekColumns(newweekColumns); //subimos estado nuevo
    }
    if(start !== finish){


      //mover entre días
      const startTaskIds = Array.from(start.taskIds);
      startTaskIds.splice(source.index,1);
      const newStart = {
        ...start,
        taskIds: startTaskIds,
      };
      const finishTaskIds = Array.from(finish.taskIds);
      finishTaskIds.splice(destination.index, 0, draggableId);
      const newFinish = {
        ...finish,
        taskIds: finishTaskIds,
      };
      const newweekColumns = {
        ...weekColumns,
        columns:{
          ...weekColumns.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        }
      };
      setWeekColumns(newweekColumns);
    }
  }

  const handleChangeDish = (data) => {
  const newweekColumns = {
      ...weekColumns,
      tasks:{
      ...weekColumns.tasks,
        [data.id]:{
        id: data.id,
        content: data.value,
        }
      }
    }
    setWeekColumns(newweekColumns)

  }

  return (
    <div className="week__table">
      
              <div className="week__dayMoment">
                <p>COMIDA</p>
                <p>CENA</p>
              </div>
            
<DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
            
              <div className="week__container">
                
             {weekColumns.columnOrder.map(columnId=>{
        const column = weekColumns.columns[columnId];
        const task = column.taskIds.map(taskId =>weekColumns.tasks[taskId] )

        //otra manera de hacerlo más larga y peor y la otra forma es con la función paintColumns de arriba
//        let tasks= column.taskIds;
//       console.log(tasks);
//       let taskInfo= [];
// for (const task of tasks) {
//   console.log(task);

//   // console.log(taskId);
//   let taskOne = weekColumns.tasks[task];
//   console.log(taskOne);
//   taskInfo.push(taskOne);
  
      
      return <Column key={column.id} column={column} tasks={task} handleChangeDish={handleChangeDish}/>
    
    })
  
  }
  

              </div>
</DragDropContext>
            

    </div>
  )
}

export default Week;
