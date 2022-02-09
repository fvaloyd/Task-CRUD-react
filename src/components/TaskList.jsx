import { TaslListItem } from './TaslListItem';

export const TaskList = ({ tasks, handleDeleteTask, dropForm, setdropForm, handleToggle }) => {
  return (
      <ul className="list-group p-5 col-6">
          <h2>Task List</h2>
          <TaslListItem tasks={ tasks } handleDeleteTask={ handleDeleteTask } dropForm={ dropForm } setdropForm={ setdropForm } handleToggle={ handleToggle }/>
      </ul>
  )
}
