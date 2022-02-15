import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Index from '@/layout/index.vue'
import CourseLayout from '@/layout/CourseLayout.vue';
import LoginUser from '@/views/login/user-login.vue'
import Nprogress from 'nprogress'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/login',
        component: LoginUser,
        name: 'login',
        children: [
            {
                path: '/login',
                component: () => import('@/views/login/user-login.vue'),
            }
        ]
    },
    {
        path: '/dashboard',
        component: Index,
        children: [
            {
                path: '',
                component: () => import('@/views/home-webs/dashboard.vue'),
                name: 'home',
                meta: {
                    title: '首页',
                }
            }
        ]
    },
    {
        path: "/my-course",
        component: Index,
        children: [
            {
                path:'/my-course',
                name: 'my-course',
                component: () => import('@/views/home-webs/my-course.vue'),
                beforeEnter(routerTo, routerFrom, next) {
                    // todo: move api call here
                    setTimeout(() => {
                        console.log('fake api delay 1000ms')
                        next();
                    }, 1000);
                    
                },
                meta: {
                    title: '我的课程',
                }
            }
        ]
    },

    {
        path: "/course-content/:courseId",
        component: CourseLayout,
        children: [
            {
                path: '',
                name: "course-content",
                component: () => import('@/views/course-webs/course-content.vue'),
                props: true,
            }
        ]
    },
    {
        path: "/course-content/:courseId/load-video",
        component: CourseLayout,
        children: [
            {
                path:'',
                component: () => import('@/views/course-webs/load-video.vue'),
                meta: {
                    title: '上传视频',
                }
            }
        ]
    },
    {
        path: "/course-content/:courseId/edit-practice",
        component: CourseLayout,
        children: [
            {
                path:'',
                name: 'EditPractice',
                props: true,
                component: () => import('@/views/course-webs/edit-practice.vue'),
                meta: {
                    title: '编辑练习',
                }
            }
        ]
    },
    {
        path: "/course-content/:courseId/comment",
        component: CourseLayout,
        children: [
            {
                path:'',
                component: () => import('@/views/course-webs/comment.vue'),
                meta: {
                    title: '评价报告',
                }
            }
        ]
    },
    {
        path: "/course-content/:courseId/load-courseware",
        component: CourseLayout,
        children: [
            {
                path:'',
                component: () => import('@/views/course-webs/load-courseware.vue'),
                meta: {
                    title: '上传课件',
                }
            }
        ]
    },
    {
        path: "/calendar",
        component: Index,
        children: [
            {
                path: '/calendar',
                component: () => import('@/views/home-webs/calendar.vue'),
                meta: {
                    title: '日历',
                }
            }
        ]
    },
    {
        path: "/setting",
        component: Index,
        children: [
            {
                path: '/setting',
                component: () => import('@/views/home-webs/setting.vue'),
                meta: {
                    title: '设置',
                }
            }
        ]
    },
    {
        path: "/question",
        component: Index,
        children: [
            {
                path: '/question',
                component: () => import('@/views/home-webs/question.vue'),
                meta: {
                    title: '帮助',
                }
            }
        ]
    },

    {
        path: "/profile",
        component: Index,
        children: [
            {
                path: '/profile',
                component: () => import('@/views/home-webs/profile.vue'),
                meta: {
                    title: '个人中心',
                }
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((routerTo, routerFrom, next) => {
    Nprogress.start()
    next()
})

router.afterEach(() => {
    Nprogress.done()
})

export default router