<template>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span :class="{ 'text-decoration-line-through': todo.completed }">{{ todo.text }} ({{ todo.timestamp }})</span>
    <div class="button-group" v-if="!isEditing">
        <button class="btn btn-sm btn-secondary" @click="editTodo">✎</button>
        <button class="btn btn-sm btn-success" @click="markAsCompleted(todo.id)">✔</button>
        <button class="btn btn-sm btn-danger" @click="deleteTodo(todo.id)">✖</button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['todo', 'isEditing'],
  data() {
    return {
      editedText: ''
    };
  },
  watch: {
    todo: {
      immediate: true,
      handler(newTodo) {
        this.todoText = newTodo.text || ''
      }
    },
  },
  methods: {
    markAsCompleted(id) {
        this.$store.commit('markAsCompleted', id)
    },
    deleteTodo(id) {
        this.$store.commit('deleteTodo', id)
        this.$emit('deleteTodo', this.todo.id)
    },
    editTodo() {
        this.$emit('editTodo', this.todo)
        this.editedText = this.todo.text;
    },
  }
}
</script>

<style scoped>
    .button-group {
        display: flex;
        gap: 0.5rem; /* Adjust the gap size as needed */
    }
</style>