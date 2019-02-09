<template>
  <div class="post__container">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Task</h5>
        <p class="card-text"></p>
        <p><span>Task: </span>{{taskId}}</p>
        <p><span>Task: </span>{{description}}</p>
        <p><span>Author: </span>{{author}}</p>
    <button type="button" class="btn btn-success" @click="complete" >Complete task</button>
    <button type="button" class="btn btn-success" @click="edit" >Update</button>
    <button type="button" class="btn btn btn-danger" @click="delet" >Delete</button>
    
    <div v-if="status" class="progress">
  <div class="progress-bar bg-success" role="progressbar" style="width: 100%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
  </div>

  </div>
  </div>
</template>

<script>
export default {
  name: 'tasks',
  props: {
    taskId: {
      type: String,
      required: true
    },
    description: {
      type: String,
    },
    author: {
      type: String,
      required: true
    },
    status: {
      type: Boolean
    },
    createdAt: {
      type: String,
    },
  },
  methods: {
    edit() {
      this.$emit("edit", {
        taskId: this.taskId,
        description: this.description,
        author: this.author,
        status: this.status,
        createdAt: this.createdAt
      });
    },
    delet() {
      this.$emit("delet", {
        taskId: this.taskId
      });
    },
    complete(){
        his.$emit("complete", {
        taskId: this.taskId,
        description: this.description,
        author: this.author,
        status: true
    });
    }
}
}
</script>

<style>
span {
  font-weight:500;
}

.progress{
  margin-top:15px;
}
</style>