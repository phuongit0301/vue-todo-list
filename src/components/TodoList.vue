<template>
  <div>
    <AddOrUpdateTodo @todoSaved="clearSelectedTodo" :todo="selectedTodo" :isEditing="isEditing(selectedTodo?.id)" />
    <ul class="list-group mt-3">
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        :isEditing="isEditing(todo.id)"
        @editTodo="selectTodoForEdit"
        @deleteTodo="clearSelectedTodo"
      />
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AddOrUpdateTodo from './AddOrUpdateTodo'
import TodoItem from './TodoItem'

export default {
  components: { AddOrUpdateTodo, TodoItem },
  data() {
    return {
      selectedTodo: {}
    }
  },
  computed: mapState(['todos']),
  methods: {
    selectTodoForEdit(todo) {
      this.selectedTodo = { ...todo }
    },
    clearSelectedTodo() {
      this.selectedTodo = {}
    },
    isEditing(todoId) {
      return this.selectedTodo.id === todoId;
    }
  }
}
</script>
