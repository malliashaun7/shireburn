import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Employee from '../views/Employee'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/employee/:id',
        name: 'Employee',
        component: Employee,
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})
  
export default router