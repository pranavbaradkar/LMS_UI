import VueRouter from "vue-router";
import { HomeViewRoutes, authentication, course, onboarding } from "./constants";
import Login from "../views/Login/Login"
import HomeView from "../views/HomeView/HomeView"
import Onboarding from "../views/onboarding/onboarding"
import Goals from "../views/goals/Goals"
import CourseStart from '../views/CourseStart/CourseStart'
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: HomeViewRoutes.homeView,
        component: HomeView,
    },
    {
        path: '/login',
        name: authentication.login,
        component: Login,
    },
    {
        path: '/onboarding',
        name: onboarding.onboarding,
        component: Onboarding,
    },
    {
        path: '/onboarding/goals',
        name: onboarding.goals,
        component: Goals,
    },
    {
        path: '/course',
        name: course.course,
        component: CourseStart,
    }
]

export const router = new VueRouter({
    routes: routes,
});