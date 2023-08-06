import { createRouter,createWebHistory } from "vue-router";

import App from "./App.vue"
import LoginPage from "./components/LoginPage.vue"
import HomePage from "./components/HomePage.vue"
import CreateAccount from "./components/CreateAccount.vue"

const routes = [
    { path: '/', component: HomePage, name: 'app'},
    { path: '/login', component: LoginPage, name : 'Login'},
    {path: '/createaccount',component: CreateAccount, name : 'createAccount'}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router