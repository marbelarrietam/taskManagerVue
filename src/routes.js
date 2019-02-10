import Authors from './components/AuthorsForm.vue'
import Tasks from './components/Tasks.vue'
import Home from './components/Home.vue'

const routes = [
    { path: '/', component: Tasks, name: 'tasks' },
    { path: '/authors', component: Authors, name: 'authors' }
    

]

export default routes