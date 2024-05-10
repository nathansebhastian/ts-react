import { useState } from 'react';

interface TaskFormProps {
  onAddTask: (title: string) => void;
}

function TaskForm({ onAddTask }: TaskFormProps) {
  const [title, setTitle] = useState('');

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (title) {
      onAddTask(title);
    }
  };

  return (
    <form onSubmit={submitForm}>
      <div className='row mb-3'>
        <label htmlFor='title' className='col-2 col-form-label'>
          New Task Title
        </label>
        <div className='col-8'>
          <input
            id='title'
            type='text'
            className='form-control'
            onChange={e => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className='col-2'>
          <button type='submit' className='btn btn-primary'>
            Add Task
          </button>
        </div>
      </div>
    </form>
  );
}

export default TaskForm;
