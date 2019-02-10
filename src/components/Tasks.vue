<template>

<div id="app">
    <div class="container col-12">
      <div class="row">
        <div class="col-8">
          <div v-if="loading">
            <p>Loading</p>
          </div>
          <div v-else class="col-12">
            <task
              style="margin:4px;"
              v-for="item in even(items)"
              :key="item._id"
              :description="item.description"
              :author="item.author"
              :createdAt="item.createdAt"
              :taskId="item.taskId"
              :status="item.status"
              @edit="edit"
              @delet="delet"
            ></task>
          </div>
        </div>
        <div class="col-4">
          <task-form
            :taskUpdate="replaceEdit(taskUpdate)"
            :taskId="taskId"
            @save="create"
            @update="update"
          ></task-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Task from "./Task";
import TaskForm from "./TaskForm";
export default {
  name: 'tasks',
    components: {
    task: Task,
    "task-form": TaskForm
  },
   data() {
    return {
      loading: true,
      items: [],
      taskId: "",
      taskUpdate: {
        taskId: "",
        description: "",
        authorId: "",
        status: false
      }
    };
  },
  created(){
      this.showTasks();
  },
  methods: {

    showTasks(){
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
            status: item.status,
            createdAt: item.createdAt     
          }
        });
        this.items = tasks;
        console.log(this.items);
        this.loading = false;
      });
    },
 create(tasks) {
      console.log(tasks);
              console.log("#########");
        console.log(JSON.stringify(tasks));
      fetch('http://localhost:3000/api/tasks', {
        method: "POST",
        body: JSON.stringify(tasks),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.showTasks();
        });
    },
    update(tasks) {
      fetch('http://localhost:3000/api/tasks/'+ tasks.id, {
        method: "PUT",
        body: JSON.stringify(tasks),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.showTasks();
        });
    },
    edit(tasks) {
      this.taskUpdate = {
        taskId: tasks.taskId,
        authorId: tasks.authorId,
        description: tasks.description,
        status: tasks.status,
        createdAt: tasks.createdAt
      };
    },
    delet(tasks) {
      fetch('http://localhost:3000/api/tasks/'+ tasks.taskId, {
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
          this.showTasks();
        });
    },
    even: function(items) {
      return items.slice().sort(function(a, b) {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
    },
    replaceEdit: function(tasksUpdate) {
      return tasksUpdate;
    }
  }
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