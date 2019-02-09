<template>
  <div class="post__container">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Task</h5>
        <p class="card-text"></p>
        <p><span>Task: </span>{{description}}</p>
        <p><span>Author: </span>{{author}}</p>
        <p>{{status}}</p>
    <button type="button" class="btn btn-success" @click="save" >Complete task</button>
    <button type="button" class="btn btn-success" @click="save" >Update</button>
    <button type="button" class="btn btn btn-danger" @click="save" >Delete</button>
    
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
    description: {
      type: String,
      default: '',
    },
    author: {
      type: String,
      required: true
    },
    status:{
      type: Boolean
    }
  },
};
</script>

<style>
span {
  font-weight:500;
}

.progress{
  margin-top:15px;
}
</style>