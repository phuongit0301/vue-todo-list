import { createStore } from 'vuex'

const saveStatePlugin = store => {
  store.subscribe((mutation, state) => {
    localStorage.setItem('todos', JSON.stringify(state.todos))
  })
}

export default createStore({
  state: {
    todos: JSON.parse(localStorage.getItem('todos')) || []
  },
  mutations: {
    addTodo (state, todo) {
      state.todos.push({
        id: Date.now(),
        text: todo.text,
        completed: false,
        timestamp: new Date().toLocaleString()
      })
    },
    updateTodo (state, updatedTodo) {
      const index = state.todos.findIndex(todo => todo.id === updatedTodo.id)
      if (index !== -1) {
        state.todos[index] = updatedTodo
      }
    },
    markAsCompleted (state, todoId) {
      const todo = state.todos.find(todo => todo.id === todoId)
      if (todo) todo.completed = !todo.completed
    },
    deleteTodo (state, todoId) {
      state.todos = state.todos.filter(todo => todo.id !== todoId)
    }
  },
  plugins: [saveStatePlugin]
})