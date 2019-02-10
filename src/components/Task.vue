<template>
  <div class="post__container">
    <div class="card">
      <div class="card-body row">
        <div class="col-6">
          <h5 class="card-title">Task: {{description}}</h5>
          <p class="card-text">Author: {{author}}</p>
          <p>created At: {{createdAt}}</p>
    <div v-if="status" class="progress">
  <div class="progress-bar bg-success" role="progressbar" style="width: 100%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
        </div>
        
        <div class= "buttonsmanager">
        <div class="col-2">
          <button type="button" class="btn btn-primary" @click="edit">Update</button>
        </div>
        <div class="col-2">
          <button ype="button"  class="btn btn-danger" @click="delet" >Delete</button>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "task",
  props: {
    description: {
      type: String,
      default: ""
    },
    author: {
      type: String,
      required: true,
      default: ""
    },
    taskId: {
      type: String,
      required: true
    },
    status: {
      type: Boolean,
      required: true,
      default: false
    },
    createdAt: {
      type: String,
      required: true,
      default: ""
    }
  },
  methods: {
    edit() {
      this.$emit("edit", {
        taskId: this.taskId,
        description: this.description,
        author: this.author,
        authorId: this.authorId,
        createdAt: this.createdAt,
        status: this.status
      });
    },
    delet() {
      this.$emit("delet", {
        taskId: this.taskId
      });
    }
  }
};
</script>

<style scoped>
.card {
    margin-top: 10px;
    height: auto;
    width: 80%;
    font-size: 12px;
}

.card-title {
    font-size: 14px;
    font-weight: bold;
}

.buttonsmanager {
    display: block;
}

.btn {
    position: relative;
    width: 100px;
    margin: 10px;
}
</style>