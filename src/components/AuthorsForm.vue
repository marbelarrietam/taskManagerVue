<template>
  <form>
    <div class="form-group">
      <label>firstname:</label>
      <input type="text" class="form-control" rows="3" v-model="firstname"></input>
    </div>
      <label>lastname:</label>
      <input type="text" class="form-control" rows="3" v-model="lastname"></input>
    </div>
          <label>email:</label>
      <input type="email" class="form-control" rows="3" v-model="email"></input>
    </div>
    <button type="button" class="btn btn-primary" @click="save" >Signup</button>
  </form>
</template>

<script>
export default {
  name: 'authors-form',
  data() {
      return{
          firstname:'',
          lastname:'',
          email:''
      }
  },
  methods: {
    save() {
        console.log(this.firstname);
     fetch('http://localhost:3000/api/users', {
       method: 'POST',
        body: JSON.stringify({firstname: this.firstname,
               lastname: this.lastname,
                email: this.email }),
        headers: {
          "Content-Type": "application/json",
        },
      })
       .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          alert("user created");
          this.firstname='';
          this.lastname='';
          this.email='';
          this.items.push(data);
                    
        });
    }
  }
}
</script>

<style scoped>
form {
  padding-top: 30px;
  width: 50%;
  text-align: center;
  margin: 0 auto;
}

button {
  margin-top: 20px;
}

input {
  text-align: center;
}
</style>