<template>
  <div class="post__container">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title"></h5>
        <p class="card-text"></p>
        <p>{{description}}</p>
        <p>{{author}}</p>
        <p>{{status}}</p>
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