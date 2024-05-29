import axios from 'axios';

const todoService = {
  async fetchTodos() {
    try {
      const response = await axios.get('/todos.json');
      return response.data;
    } catch (error) {
      console.error('Error fetching todos:', error);
      throw error;
    }
  }
};

export default todoService;