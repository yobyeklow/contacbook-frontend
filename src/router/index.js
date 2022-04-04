import { createRouter, createWebHistory } from 'vue-router'
import ContactBook from '../views/ContactBook.vue'
import NotFound from '../views/NotFound.vue'
import ContactEdit from '../views/ContactEdit.vue'
import ContactAdd from '../views/ContactAdd.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
        name: "contactbook",
        component: ContactBook,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: NotFound,
    },
    {
      path: "/contacts/:id",
      name: "contact.edit",
      component: ContactEdit,
      props: true // Truyền các biến trong $route.params vào làm props
    },
    {
      path: "/contacts",
      name: "contact.add",
      component: ContactAdd,
    },
  ]
})

export default router
