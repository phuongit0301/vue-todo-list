<template>
  <div>
    <h2>In Progress Tasks</h2>
    <ul class="list-group">
      <TodoItem v-for="todo in inProgressTodos" :key="todo.id" :todo="todo" />
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TodoItem from '@/components/TodoItem'

export default {
  components: { TodoItem },
  computed: {
    ...mapState(['todos']),
    inProgressTodos() {
      return this.todos.filter(todo => !todo.completed)
    }
  }
}
</script>
