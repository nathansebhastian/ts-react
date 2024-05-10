import 'bootstrap/dist/css/bootstrap.min.css';
import TaskList from './components/TaskList';
import Task from './models/Task';
import { useEffect, useState } from 'react';
import taskService from './services/Task';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getData();
  } ,[])

  const getData = async () => {
    const tasks = await taskService.getTasks();
    setTasks(tasks);
  }

  const onRemoveTask = async (id: number) => {
    await taskService.removeTask(id);
    setTasks(tasks.filter(task => task.id !== id));
  }

  const onAddTask = async (title: string) => {
    const newTask = await taskService.addTask(title) as Task;
    setTasks([newTask, ...tasks ]);
  }

  return (
    <div className='container'>
      <h1>To-do List</h1>
      <TaskForm onAddTask={onAddTask} />
      <TaskList tasks={tasks} onRemoveTask={onRemoveTask} />
    </div>
  );
}

export default App;
