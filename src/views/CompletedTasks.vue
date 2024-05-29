<template>
  <div>
    <h2>Completed Tasks</h2>
    <ul class="list-group">
      <TodoItem v-for="todo in completedTodos" :key="todo.id" :todo="todo" />
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
    completedTodos() {
      return this.todos.filter(todo => todo.completed)
    }
  }
}
</script>
