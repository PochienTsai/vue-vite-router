import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/newpage',
    name: 'newpage',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/NewPage.vue'),
    children: [
      {
        path: 'a',
        name: 'componentA',
        component: () => import('../views/ComponentA.vue')
      },
      {
        path: 'b',
        name: 'componentB',
        component: () => import('../views/ComponentB.vue')
      },
      {
        path: 'dynamicRouter/:id',
        //path: 'dynamicRouter',
        component: () => import('../views/DynamicRouter.vue'),
      },
      {
        // { path: '/user/:id/post/:postId', component: UserPost }
        path: 'dynamicRouterByProps/:id',
        //path: 'dynamicRouter',
        component: () => import('../views/DynamicRouterByProps.vue'),
        props: (route) =>
        {
          console.log('route:', route);
          return {
            id: route.params.id,
          };
        }
      },
      {
        // { path: '/user/:id/post/:postId', component: UserPost }
        path: 'routerNavigation',
        component: () => import('../views/RouterNavigation.vue'),
      },
      {
        path: 'namedView',
        component: () => import('../views/NameView.vue'),
        children: [
          {
            path: 'c2a',
            components: {
              left: () => import('../views/ComponentC.vue'),
              right: () => import('../views/ComponentA.vue')
            }
          },
          {
            path: 'a2b',
            components: {
              left: () => import('../views/ComponentA.vue'),
              right: () => import('../views/ComponentB.vue')
            }
          }
        ]
      }
    ]
  },
  //404頁面
  {
    path: '/:pathMatch(.*)*', // 404頁面
    name: 'not-found',
    component: () => import('../views/NotFound.vue')
  },
  //重新導向
  {
    path: '/newPage/:pathMatch(.*)', // 可針對特定頁面做重新導向,這裡是針對newPage下所有頁面做重新導向
    // redirect: { name: 'not-found' }
    redirect:
    {
      name: 'home'
    }
  }
];
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition)
  {
    // to, from 都是路由信息对象, 表示目标路由(to)和出发路由(from)。
    // savedPosition 可以為空。
    if (to.fullPath.match('/newpage'))
    {
      return { top: 0 };
    }
    return {};
  }
});

export default router;
