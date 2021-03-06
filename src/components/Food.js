import React, {useState} from 'react';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import Columnfood from './Columnfood';

let initialData = {
  columns: {
    'column-1':{
      id: 'column-1',
      title: 'Fruta/Verdura',
      taskIds: ['task-1','task-2','task-3','task-4','task-5','task-6','task-7','task-8','task-9','task-10','task-11','task-12','task-13','task-14','task-15','task-16','task-17','task-18','task-19','task-20','task-21','task-22','task-23','task-24','task-25','task-26','task-27','task-28','task-29','task-30','task-31','task-32','task-112'],
    },
    'column-2':{
      id: 'column-2',
      title: 'Carne/Pescado',
      taskIds: ['task-34','task-35','task-36','task-37','task-38','task-39','task-40','task-41','task-42','task-43','task-44','task-45','task-46','task-47','task-48','task-49','task-50'],
    },
    'column-3':{
      id: 'column-3',
      title: 'Charcutería',
      taskIds: ['task-51','task-52','task-53','task-54','task-55','task-56','task-57','task-58','task-59','task-60','task-61','task-62'],
    },
    'column-4':{
      id: 'column-4',
      title: 'Otros',
      taskIds: ['task-63','task-64','task-65','task-66','task-67','task-68','task-69','task-70','task-71','task-72','task-73','task-74','task-75','task-76','task-77','task-78','task-79','task-80','task-81','task-82','task-83','task-84','task-85','task-86','task-87','task-88','task-89','task-90','task-91','task-113','task-114'],
    },
    'column-5':{
      id: 'column-5',
      title: 'Higiene personal/casa',
      taskIds: ['task-92','task-93','task-94','task-95','task-96','task-97','task-98','task-99','task-100','task-101','task-102','task-103','task-104','task-105','task-106','task-107','task-108','task-109','task-110','task-111'],
    },
    'column-6':{
      id: 'column-6',
      title: 'Frutería',
      taskIds: [],
    },
    'column-7':{
      id: 'column-7',
      title: 'Pesca/Carni/Polle',
      taskIds: [],
    },
    'column-8':{
      id: 'column-8',
      title: 'Corte',
      taskIds: [],
    },

  },
  tasks: {
    'task-1':{id:'task-1', content:'Calabacín', columnStart:"column-1"},
    'task-2':{id:'task-2', content:'Berenjena', columnStart:"column-1"},
    'task-3':{id:'task-3', content:'Pimiento rojo', columnStart:"column-1"},
    'task-4':{id:'task-4', content:'Pimiento verde(ita)', columnStart:"column-1"},
    'task-5':{id:'task-5', content:'Patata', columnStart:"column-1"},
    'task-6':{id:'task-6', content:'Cebolla', columnStart:"column-1"},
    'task-7':{id:'task-7', content:'Ajo', columnStart:"column-1"},
    'task-8':{id:'task-8', content:'Zanahoria', columnStart:"column-1"},
    'task-9':{id:'task-9', content:'Puerro', columnStart:"column-1"},
    'task-10':{id:'task-10', content:'Judia verde', columnStart:"column-1"},
    'task-11':{id:'task-11', content:'Col', columnStart:"column-1"},
    'task-12':{id:'task-12', content:'Brocoli', columnStart:"column-1"},
    'task-13':{id:'task-13', content:'Tomate pera', columnStart:"column-1"},
    'task-14':{id:'task-14', content:'Alcachofa', columnStart:"column-1"},
    'task-15':{id:'task-15', content:'Champiñon', columnStart:"column-1"},
    'task-16':{id:'task-16', content:'Esparrago', columnStart:"column-1"},
    'task-17':{id:'task-17', content:'Tomate Ensalada', columnStart:"column-1"},
    'task-18':{id:'task-18', content:'Manzana', columnStart:"column-1"},
    'task-19':{id:'task-19', content:'Coliflor', columnStart:"column-1"},
    'task-20':{id:'task-20', content:'Plátano', columnStart:"column-1"},
    'task-21':{id:'task-21', content:'Kiwi', columnStart:"column-1"},
    'task-22':{id:'task-22', content:'Pera', columnStart:"column-1"},
    'task-23':{id:'task-23', content:'Caqui', columnStart:"column-1"},
    'task-24':{id:'task-24', content:'Granada', columnStart:"column-1"},
    'task-25':{id:'task-25', content:'Ciruela', columnStart:"column-1"},
    'task-26':{id:'task-26', content:'Fresa', columnStart:"column-1"},
    'task-27':{id:'task-27', content:'Sandía', columnStart:"column-1"},
    'task-28':{id:'task-28', content:'Melón', columnStart:"column-1"},
    'task-29':{id:'task-29', content:'Aguacate', columnStart:"column-1"},
    'task-30':{id:'task-30', content:'Uva', columnStart:"column-1"},
    'task-31':{id:'task-31', content:'Naranjas', columnStart:"column-1"},
    'task-32':{id:'task-32', content:'Mandarinas', columnStart:"column-1"},
    'task-33':{id:'task-33', content:'Espinacas', columnStart:"column-1"},
    'task-34':{id:'task-34', content:'Salmón', columnStart:"column-2"},
    'task-35':{id:'task-35', content:'Lubina', columnStart:"column-2"},
    'task-36':{id:'task-36', content:'Gallo', columnStart:"column-2"},
    'task-37':{id:'task-37', content:'Langostinos', columnStart:"column-2"},
    'task-38':{id:'task-38', content:'Boquerones', columnStart:"column-2"},
    'task-39':{id:'task-39', content:'Pez Espada', columnStart:"column-2"},
    'task-40':{id:'task-40', content:'Chuletas de Cerdo', columnStart:"column-2"},
    'task-41':{id:'task-41', content:'Hamburguesa', columnStart:"column-2"},
    'task-42':{id:'task-42', content:'Pincho moruno', columnStart:"column-2"},
    'task-43':{id:'task-43', content:'Ternera cocinar', columnStart:"column-2"},
    'task-44':{id:'task-44', content:'Costillas cerdo', columnStart:"column-2"},
    'task-45':{id:'task-45', content:'Panceta', columnStart:"column-2"},
    'task-46':{id:'task-46', content:'Carne picada', columnStart:"column-2"},
    'task-47':{id:'task-47', content:'Pechuga Pollo', columnStart:"column-2"},
    'task-48':{id:'task-48', content:'Muslo Contramuslo', columnStart:"column-2"},
    'task-49':{id:'task-49', content:'Alita', columnStart:"column-2"},
    'task-50':{id:'task-50', content:'Huevos', columnStart:"column-2"},
    'task-51':{id:'task-51', content:'Bacon', columnStart:"column-3"},
    'task-52':{id:'task-52', content:'Chorizo', columnStart:"column-3"},
    'task-53':{id:'task-53', content:'Jamón', columnStart:"column-3"},
    'task-54':{id:'task-54', content:'Mortadela Boloñesa', columnStart:"column-3"},
    'task-55':{id:'task-55', content:'Queso manchego', columnStart:"column-3"},
    'task-56':{id:'task-56', content:'Queso Parmesano', columnStart:"column-3"},
    'task-57':{id:'task-57', content:'Queso feta', columnStart:"column-3"},
    'task-58':{id:'task-58', content:'Queso fresco', columnStart:"column-3"},
    'task-59':{id:'task-59', content:'Queso cabra', columnStart:"column-3"},
    'task-60':{id:'task-60', content:'Queso pizza', columnStart:"column-3"},
    'task-61':{id:'task-61', content:'Queso azul', columnStart:"column-3"},
    'task-62':{id:'task-62', content:'Queso gouda', columnStart:"column-3"},
    'task-63':{id:'task-63', content:'Pan', columnStart:"column-4"},
    'task-64':{id:'task-64', content:'Patatas Fritas', columnStart:"column-4"},
    'task-65':{id:'task-65', content:'Frutos secos', columnStart:"column-4"},
    'task-66':{id:'task-66', content:'Encurtidos', columnStart:"column-4"},
    'task-67':{id:'task-67', content:'Gazpacho', columnStart:"column-4"},
    'task-68':{id:'task-68', content:'Tomate Frito', columnStart:"column-4"},
    'task-69':{id:'task-69', content:'Pasta', columnStart:"column-4"},
    'task-70':{id:'task-70', content:'Garbanzo', columnStart:"column-4"},
    'task-71':{id:'task-71', content:'Lenteja', columnStart:"column-4"},
    'task-72':{id:'task-72', content:'Frijol negro', columnStart:"column-4"},
    'task-73':{id:'task-73', content:'Cous-cous', columnStart:"column-4"},
    'task-74':{id:'task-74', content:'Harina Integral', columnStart:"column-4"},
    'task-75':{id:'task-75', content:'Harina Normal', columnStart:"column-4"},
    'task-76':{id:'task-76', content:'Especias', columnStart:"column-4"},
    'task-77':{id:'task-77', content:'Arroz bomba', columnStart:"column-4"},
    'task-78':{id:'task-78', content:'Arroz Jazmin', columnStart:"column-4"},
    'task-79':{id:'task-79', content:'Chocolate polvo', columnStart:"column-4"},
    'task-80':{id:'task-80', content:'Chocolate', columnStart:"column-4"},
    'task-81':{id:'task-81', content:'Café', columnStart:"column-4"},
    'task-82':{id:'task-82', content:'Palitos Cangrejo', columnStart:"column-4"},
    'task-83':{id:'task-83', content:'Latas', columnStart:"column-4"},
    'task-84':{id:'task-84', content:'Nata', columnStart:"column-4"},
    'task-85':{id:'task-85', content:'Panecillos', columnStart:"column-4"},
    'task-86':{id:'task-86', content:'Galletas', columnStart:"column-4"},
    'task-87':{id:'task-87', content:'Cerveza', columnStart:"column-4"},
    'task-88':{id:'task-88', content:'Vino', columnStart:"column-4"},
    'task-89':{id:'task-89', content:'Vermú', columnStart:"column-4"},
    'task-90':{id:'task-90', content:'Leche', columnStart:"column-4"},
    'task-91':{id:'task-91', content:'Actimel', columnStart:"column-4"},
    'task-92':{id:'task-92', content:'Hilo dental', columnStart:"column-5"},
    'task-93':{id:'task-93', content:'Pasta de dientes', columnStart:"column-5"},
    'task-94':{id:'task-94', content:'Crema corporal', columnStart:"column-5"},
    'task-95':{id:'task-95', content:'Crema manos', columnStart:"column-5"},
    'task-96':{id:'task-96', content:'Gel ducha', columnStart:"column-5"},
    'task-97':{id:'task-97', content:'Gel manos', columnStart:"column-5"},
    'task-98':{id:'task-98', content:'Jabón pastilla', columnStart:"column-5"},
    'task-99':{id:'task-99', content:'Champú', columnStart:"column-5"},
    'task-100':{id:'task-100', content:'Detergente negro', columnStart:"column-5"},
    'task-101':{id:'task-101', content:'Detergente delicado', columnStart:"column-5"},
    'task-102':{id:'task-102', content:'Detergente blanco', columnStart:"column-5"},
    'task-103':{id:'task-103', content:'Quitamanchas', columnStart:"column-5"},
    'task-104':{id:'task-104', content:'Fairy', columnStart:"column-5"},
    'task-105':{id:'task-105', content:'Pato wc', columnStart:"column-5"},
    'task-106':{id:'task-106', content:'Lejía', columnStart:"column-5"},
    'task-107':{id:'task-107', content:'Multiusos', columnStart:"column-5"},
    'task-108':{id:'task-108', content:'Desinfectante ropa', columnStart:"column-5"},
    'task-109':{id:'task-109', content:'Desinfectante cocina', columnStart:"column-5"},
    'task-110':{id:'task-110', content:'Friegasuelos', columnStart:"column-5"},
    'task-111':{id:'task-111', content:'Detergente Lavavajillas', columnStart:"column-5"},
    'task-112':{id:'task-112', content:'Limón', columnStart:"column-1"},
    'task-113':{id:'task-113', content:'Aceite', columnStart:"column-4"},
    'task-114':{id:'task-114', content:'Sal', columnStart:"column-4"},    




  },
  columnOrder : ['column-1', 'column-2', 'column-3', 'column-4','column-5','column-6','column-7','column-8'],
};



const Food = () => {
  
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

  const onDragStart = (start) =>{
    document.body.style.color = 'grey';
    // const homeIndex = weekColumns.columnOrder.indexOf(start.soource.droppableId);
    // setWeekColumns({ homeIndex,});
  }

  let onDragEnd = (result)=>{
    document.body.style.color='inherit';
    

    // setWeekColumns({ homeIndex: null,});
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
  
  const handleButtonClose = (data) =>{

    console.log(data.id);
    console.log(data.value);
    console.log(data.columnStart);

    weekColumns.columnOrder.map(columnId => {
      const column = weekColumns.columns[columnId];     
       column.taskIds.map((taskId, index) => {
         console.log(taskId);
         console.log(index);
        if(taskId === data.id){
          const initialColumnDelete = Array.from(column.taskIds);
          console.log(initialColumnDelete);
          initialColumnDelete.splice(index, 1);
          console.log('me han encontrado')
          console.log(initialColumnDelete);
          // tasKIds.splice(index,1);

          
          const columnfinal = weekColumns.columns[data.columnStart];
          console.log(columnfinal);
          const finalColumnDelete = Array.from(columnfinal.taskIds);
          finalColumnDelete.splice(0, 0, data.id);
  console.log(finalColumnDelete);

          const newweekColumns = {
            ...weekColumns,
            columns:{
              ...weekColumns.columns,
              [columnId]:{
                id:columnId,
                title:column.title,
                taskIds:initialColumnDelete,
              },
              [data.columnStart]:{
                id:columnfinal.id,
                title:columnfinal.title,
                taskIds:finalColumnDelete,
              }
              
            }
            
          }
          setWeekColumns(newweekColumns);
          
          
        }
        
            
          })
          
        })
       

        
      }     

   
    

    // console.log(columnnow);
    // weekColumns.columns.[columnId].map(column => {
    //   for (let i = 0; i < column.taskIds.length; i++) {
    //     const element = column.taskIds[i];
    //     if ( element === data.id){
    //       console.log('soy igual');
          
    //     }
        
    //   }

    // })
  

  return (
    <div className="food__table">
      
              <div className="food__dayMoment">
                <p></p>
                <p></p>
              </div>
            
<DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
            
              <div className="food__container">
                
             {weekColumns.columnOrder.map((columnId, index) => {
               const column = weekColumns.columns[columnId];            
     const task = column.taskIds.map(taskId =>weekColumns.tasks[taskId] );
        const isDropDisabled = index < 5;

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
  
      
      return <Columnfood key={column.id} column={column} tasks={task} isDropDisabled={isDropDisabled} weekColumns={weekColumns} handleButtonClose={handleButtonClose}/>
             
    })
  
  }
  

              </div>
</DragDropContext>
            

    </div>
  )
}

export default Food;