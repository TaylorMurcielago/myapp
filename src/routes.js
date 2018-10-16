import HomePage from './pages/home.vue';
import AboutPage from './pages/about.vue';
import FormPage from './pages/form.vue';

import Demo1Page from './pages/demo1.vue';
import Demo2Page from './pages/demo2.vue';
import Demo3Page from './pages/demo3.vue';

import DynamicRoutePage from './pages/dynamic-route.vue';
import NotFoundPage from './pages/not-found.vue';

import PanelLeftPage from './pages/panel-left.vue';
import PanelRightPage from './pages/panel-right.vue';

export default [{
        path: '/',
        component: HomePage,
    },
    {
        path: '/panel-left/',
        component: PanelLeftPage,
    },
    {
        path: '/panel-right/',
        component: PanelRightPage,
    },
    {
        path: '/about/',
        component: AboutPage,
    },
    {
        path: '/form/',
        component: FormPage,
    },
    {
        path: '/demo1/',
        component: Demo1Page,
    },
    {
        path: '/demo2/',
        component: Demo2Page,
    },
    {
        path: '/demo3/',
        component: Demo3Page,
    },
    {
        path: '/dynamic-route/blog/:blogId/post/:postId/',
        component: DynamicRoutePage,
    },
    {
        path: '(.*)',
        component: NotFoundPage,
    },
];