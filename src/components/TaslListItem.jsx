import PropTypes from 'prop-types';

export const TaslListItem = ({ tasks, handleDeleteTask, setdropForm, handleToggle }) => {

  const handleDropEditForm = (taskid) => {
    setdropForm({
      drop: true,
      type: 'EDIT_TASK',
      id: taskid
    })
  }
  const handleDropAddForm = () => {
    setdropForm({
      drop: true,
      type: 'ADD_TASK'
    })
  }
  return (
    <>
      <button className="btn btn-success my-1" onClick={ handleDropAddForm }>
        Add Task 
      </button>
      {
        tasks.map(task => {
          return (
            <li className="d-flex justify-content-between list-group-item list-group-item-action list-group-item-dark my-1" key={task.id}>
              <p className={`${task.done && 'complete'}`} onClick={() => handleToggle( task.id )}>{task.description}</p>
              <div className="d-flex flex-row">
                <button className="btn btn-outline-danger mx-1" onClick={() => handleDeleteTask(task.id)}>
                  Delete
                </button>
                <button className="btn btn-outline-primary" onClick={() => handleDropEditForm(task.id) }>
                  Edit
                </button>
              </div>

            </li>
          )
        })
      }
    </>
  )
}

TaslListItem.propTypes = {
  tasks: PropTypes.array.isRequired,
  handleDeleteTask: PropTypes.func.isRequired,
  setdropForm: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired
}