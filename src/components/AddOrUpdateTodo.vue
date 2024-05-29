<template>
  <div>
    <div class="mb-3">
      <label for="todoText" class="form-label">Todo</label>
      <input
        type="text"
        class="form-control"
        id="todoText"
        v-model="todoText"
        required
      />
    </div>
    <button @click="handleSubmit" class="btn btn-primary mr-5">
      {{ isEdit ? 'Update' : 'Add' }} Todo
    </button>
    <button @click="handleCancel()" class="btn btn-secondary" :disabled="this.todoText == ''">
      Cancel Todo
    </button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      default: () => ({ text: '' })
    }
  },
  data() {
    return {
      todoText: this.todo.text
    }
  },
  watch: {
    todo: {
      immediate: true,
      handler(newTodo) {
        this.todoText = newTodo.text || ''
      }
    }
  },
  computed: {
    isEdit() {
      return !!this.todo.id
    }
  },
  methods: {
    handleSubmit() {
      const todo = {
        ...this.todo,
        text: this.todoText
      }
      if (this.isEdit) {
        this.$store.commit('updateTodo', todo)
      } else {
        this.$store.commit('addTodo', todo)
      }
      this.todoText = ''
      this.$emit('todoSaved')
    },
    handleCancel() {
      this.todoText = ''
      this.$emit('todoSaved')
    }
  }
}
</script>

<style scoped>
    .mr-5 {
      margin-right: 5px;
    }
</style>