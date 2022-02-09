import { useEffect, useReducer, useState } from 'react';
import { TaskForm } from './TaskForm';
import { TaskList } from './TaskList';
import { taskReducer } from './taskReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('tasks')) || [];
}

export const TaskApp = () => {

  const [tasks, dispatch] = useReducer(taskReducer, [], init);

  const [dropForm, setdropForm] = useState({
    drop: false,
    type: ''
  });

  useEffect(() => {
   
  }, [dropForm])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])

  const handleAddTask = ( task ) => {
    dispatch({
      type: 'ADD_TASK',
      payload: task
    })
  }

  const handleDeleteTask = ( taskid ) => {
    dispatch({
      type: 'DELETE_TASK',
      payload: taskid
    })
  }
  
  const handleEditTask = ( taskid, taskDesc ) => {
    dispatch({
      type: 'EDIT_TASK',
      payload: {
        id: taskid,
        taskDesc: taskDesc
      }
    })
  }
  const handleToggle = ( taskid ) => {
    dispatch({
      type: 'TOGGLE_TASK',
      payload: taskid
    })
  }
  return (
    <>
      <h1 className='text-center'>Task App</h1>
      <div className='d-flex flex-row justify-content-between'>
        <TaskList tasks={ tasks } handleDeleteTask={ handleDeleteTask } setdropForm={ setdropForm } handleToggle={ handleToggle } />
        {
          (dropForm.drop)
          ?
            (<TaskForm dropForm={ dropForm } setdropForm={ setdropForm } handleAddTask={ handleAddTask } handleEditTask={ handleEditTask } tasks={ tasks }/>)
          :
            null
        }
      </div>
    </>
  )
}
