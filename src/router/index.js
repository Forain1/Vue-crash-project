import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/view/Home.vue'
import Jobs from '@/view/Jobs.vue'
import Job from '@/view/Job.vue'
import NotFound from '@/view/NotFound.vue'
import AddJob from '@/view/AddJob.vue'
import EditJob from '@/view/EditJob.vue'


const router = createRouter(
    {
        history: createWebHistory(import.meta.env.BASE_URL),
        routes: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/jobs',
                name: 'jobs',
                component: Jobs
            },
            {
                path: '/jobs/:id',
                name: 'job',
                component: Job

            },
            {
                path: '/jobs/add',
                name: 'add-job',
                component: AddJob
            },
            {
                path: '/jobs/edit/:id',
                name: 'edit-job',
                component: EditJob
            },
            {
                path: '/:catchAll(.*)',
                name: 'not-found',
                component: NotFound
            },
        ]
    }
);

export default router;