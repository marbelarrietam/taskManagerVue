<template>
  <div id="app">
  <nav class="navbar navbar-dark bg-dark">
  <a class="navbar-brand" href="#">TaskManager</a>
  <div class="navbar" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link to="authors" class="nav-link">Authors</router-link>
      </li>
    </ul>
  </div>
</nav>
    <div class="container">
      <div class="row">
   <div class="col-sm">
             <div v-if="loading">
            <p>Loading</p>
          </div>
          <div v-else>
  <tasks
              v-for="item in items"
              :key="item._id"
              :taskId="item._id"
              :description="item.description"
              :author="item.author"
              @delet="delet"
              @edit="edit"></tasks>
  </div>
  </div>
     <div class="col-sm">
  <task-form @save="create"> </task-form>
  </div>
  </div>
  </div>
  <authors-form></authors-form>
  </div>
</template>

<script>
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import AuthorsForm from './components/AuthorsForm'
export default {
  name: 'app',
  components: {
    'tasks': Tasks,
    'task-form': TaskForm,
    'authors-form': AuthorsForm
  },
  data() {
    return {
      loading: true,
      items: [],
    }
  },
    created() {
    fetch('http://localhost:3000/api/tasks')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const { items = [] } = data;
        const tasks = items.map((item) => {
          const { userId = {} } = item;
          console.log(item);
          const { firstname = '', lastname = '' } = userId;
          return {
            taskId: item._id,
            description: item.description,
            author: `${item.author.firstname} ${item.author.lastname}`,
            status: item.status
          }
          console.log(item._id)
        });
        this.items = tasks;
        this.loading = false;
      });
  },

  methods: {
        create(task) {
          console.log(task);
      fetch('http://localhost:3000/api/tasks', {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          this.items.push(data);
        });
    },
       edit(tasks) {
      this.taskUpdate = {
        taskId: tasks.taskId,
        authorId: tasks.authorId,
        description: tasks.description,
        finished: tasks.finished,
        createdAt: tasks.createdAt
      };
    },
    delet(tasks) {
      console.log("entra")
      fetch("http://localhost:3000/api/tasks/" + tasks.taskId, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          var index = this.items.indexOf(data);
          alert("Task deleted");
          this.load();
        });
  }
  }
}
</script>

<style>
.container{
  margin-top: 20px;
}
</style>
