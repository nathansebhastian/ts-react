import ky from 'ky';
import Task from '../models/Task';

class TaskService {
  http = ky.create({
    prefixUrl: 'https://jsonplaceholder.typicode.com/',
  });

  async getTasks() {
    const response = await this.http.get('todos').json<Task[]>();
    return response;
  }

  async addTask(title: string) {
    const response = await this.http
      .post('todos', { json: { title: title } })
      .json();
    return response;
  }

  async removeTask(id: number) {
    const response = await this.http.delete(`todos/${id}`).json();
    return response;
  }
}

export default new TaskService();
