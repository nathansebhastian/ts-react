import Task from '../models/Task';

interface TaskListProps {
  tasks: Task[];
  onRemoveTask: (id: number) => void;
}

function TaskList({ tasks, onRemoveTask }: TaskListProps) {
  return (
    <ul className='list-group'>
      {tasks.map(task => (
        <li className='list-group-item' key={task.id}>
          {task.title}
          <button
            className='ms-3 btn btn-danger'
            onClick={() => onRemoveTask(task.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
