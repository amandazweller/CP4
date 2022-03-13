import { createApp, h } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as mock from './mock-data.js'

const data = {
  WishList: [],
  books: JSON.parse(JSON.stringify(mock)),
}
const app = createApp({
  data() {
    return {
     WishList: [],
     books: mock,
    }
  },
  render: ()=>h(App)  
}) 
app.use(router).use(store).mount('#app')
