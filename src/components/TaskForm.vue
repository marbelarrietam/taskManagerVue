
<template>
  <form>
    <div class="form-group">
      <label>Description:</label>
      <textarea class="form-control" rows="3" v-model="_description"></textarea>
    </div>
    <div v-show="!optionEdit"  class="form-group">
      <label>Author:</label>
      <select class="form-control" v-model="_author">
        <option v-for="user in users" :key="user._id" :value="user._id">{{user.fullname}}</option>
      </select>
    </div>
    <div class="form-group">
      <input type="checkbox" class="form-check-input" v-model="_status">
      <label class="form-check-label">Completed</label>
    </div>
    <button type="button" class="btn btn-primary" @click="save">{{option}}</button>
    <button type="button" class="btn btn-light" v-show="optionEdit" @click="clear">Cancel</button>
  </form>
</template>

<script>
export default {
  name: "task-form",
  props: {
    taskUpdate: {
      taskId: "",
      description: "",
      status: false
    }
  },
  data() {
    return {
      users: [],
      optionEdit: false
    };
  },
created() {
    fetch('http://localhost:3000/api/users')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const { items = [] } = data;
        const users = items.map((item) => {
          const { _id, firstname = '', lastname = '' } = item;
          return {
            _id,
            fullname: `${firstname} ${lastname}`,
          }
        });
        this.users = users;
      });
  },
  methods: {
    save() {
      if (this.optionEdit) {
        this.update();
      } else {
        console.log(this._description);
        this.$emit("save", {
          description: this._description,
          author: this._author,
          status: this.status
        });
      }
      this.clear();
    },
    clear() {
      this.taskUpdate.taskId = "";
      this.taskUpdate.description = "";
      this.taskUpdate.authorId = "";
      this.taskUpdate.author = "";
      this.taskUpdate.status = false;
    },
    update() {
      this.$emit("update", {
        id: this._id,
        description: this._description,
        status: this._status
      });
        console.log(this._id)
    }
  },
  computed: {
    option() {
      if (this.taskUpdate.taskId == "") {
        this.optionEdit = false;
      } else {
        this.optionEdit = true;
      }
      if (this.optionEdit) {
        return "Update";
      } else {
        return "Save";
      }
    },
    _id: {
      //get
      get: function() {
        return this.taskUpdate.taskId;
      },
      // setter
      set: function(newValue) {
        this.taskUpdate.taskId = newValue;
      }
    },
    _description: {
      //get
      get: function() {
        return this.taskUpdate.description;
      },
      // setter
      set: function(newValue) {
        this.taskUpdate.description = newValue;
      }
    },
    _author: {
      //get
      get: function() {
        return this.taskUpdate.authorId;
      },
      // setter
      set: function(newValue) {
        this.taskUpdate.authorId = newValue;
      }
    },
    _status: {
      //get
      get: function() {
        return this.taskUpdate.status;
      },
      // setter
      set: function(newValue) {
        this.taskUpdate.status = newValue;
      }
    }
  }
};
</script>