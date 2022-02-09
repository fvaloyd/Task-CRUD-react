import { useEffect } from 'react';
import { useForm } from '../hooks/useForm';

export const TaskForm = ({ dropForm, setdropForm, handleAddTask, handleEditTask, tasks }) => {

  const [{description}, handleInputChange, setformState]  = useForm({
    description: ''
  })
  
  useEffect(() => {
    if(dropForm.type === 'EDIT_TASK'){
      const task = tasks.find(task => task.id === dropForm.id)
      setformState({
        description: task.description
      })
    }
  }, [setformState])

  const handleSubmit = (e) => {
    e.preventDefault();
    if(description.trim <= 1){
      return;
    }
    if(dropForm.type === 'ADD_TASK'){
      const newTask = {
        id: new Date().getTime(),
        description: description,
        done: false
      }
      handleAddTask(newTask);
      setdropForm({
        drop: false,
        type: ''
      })
    }
    if(dropForm.type === 'EDIT_TASK'){
      handleEditTask(dropForm.id, description);
      setdropForm({
        drop: false,
        type: ''
      })
    }
  }

  return (
    <form className="p-5 col-5 form-group">
      <h2>Form</h2>
      <input
        type='text' 
        name='description'
        className="form-control"
        autoComplete="off"
        placeholder="some task..."
        value={description}
        onChange={handleInputChange}
      />
      <button className="btn btn-primary form-control my-2" onClick={ handleSubmit }>
        Save
      </button>
    </form>
  )
}
