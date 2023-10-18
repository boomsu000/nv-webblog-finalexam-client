import Vue from 'vue'
import Router from 'vue-router'
import UserIndex from '@/components/Users/Index'
import UserEdit from '@/components/Users/EditUser'
import UserShow from '@/components/Users/ShowUser'
import UserCreate from '@/components/Users/CreateUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/course/create',
      name: 'course-create',
      component: UserCreate
    },
    {
      path: '/course/edit/:courseId',
      name: 'course-edit',
      component: UserEdit
    },
    {
      path: '/course/:courseId',
      name: 'course',
      component: UserShow
    },
    {
      path: '/courses',
      name: 'courses',
      component: UserIndex
    },

    

  ]
})