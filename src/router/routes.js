
//使用懒加载component:()=>import('../views/Legends/Skirmisher')
//可以不用使用impot()的方式，直接导入组件，webpack会自动进行代码分割，提高性能
//HOME下的路由
import Home from '../views/Home'
import About from '../views/About'
import BattlePass from '../views/BattlePass'
import Legends from '../views/Legends'
import Zhuce from '../views/Zhuce'
import Login from '../views/Login'
import Modes from '../views/Modes'
import Season from '../views/Season'
//Legends下的子路由
import All from '../views/Legends/All'
import Assault from '../views/Legends/Assault'
import Skirmisher from '../views/Legends/Skirmisher'
import Recon from '../views/Legends/Recon'
import Controller from '../views/Legends/Controller'
import Support from '../views/Legends/Support'
export default [

    {
        path: '/',
        direct: '/Home',
        component: Home
    },
    {
        path: '/Home',
        name: 'Home',
        component: Home,
        meta: {
            title: '首页'
        }
    },
    {
        path: '/About',
        name: 'About',
        component: About,
        meta: {
            title: '关于'
        }
    },
    {
        path: '/Legends',
        name: 'Legends',
        component: Legends,
        meta: {
            title: '传奇'
        },
        redirect: '/All',
        children: [
            {
                path: '/',
                name: 'All',
                component: () => import('../views/Legends/All'),

            },
            {
                path: '/All',
                name: 'All',
                component: () => import('../views/Legends/All'),
            },
            {
                path: '/Assault',
                name: 'Assault',
                component: () => import('../views/Legends/Assault'),
            },

            {
                path: '/Skirmisher',
                name: 'Skirmisher',
                component: () => import('../views/Legends/Skirmisher'),
            },
            {
                path: '/Recon',
                name: 'Recon',
                component: () => import('../views/Legends/Recon'),
            },
            {
                path: '/Controller',
                name: 'Controller',
                component: () => import('../views/Legends/Controller'),
            },
            {
                path: '/Support',
                name: 'Support',
                component: () => import('../views/Legends/Support'),
            },
        ]
    },

    {
        path: '/BattlePass',
        name: 'BattlePass',
        component: BattlePass,
        meta: {
            title: '通行证'
        }
    },

    {

        path: '/Login',
        name: 'Login',
        component: Login,
        meta: {
            title: '登录'
        }
    },
    {
        path: '/Zhuce',
        name: 'Zhuce',
        component: Zhuce,
        meta: {
            title: '注册'
        }
    },
    {

        path: '/Modes',
        name: 'Modes',
        component: Modes,
        meta: {
            title: '模式'
        }
    },
    {

        path: '/Season',
        name: 'Season',
        component: Season,
        meta: {
            title: '赛季'
        }
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About'),
        meta: {
            title: '关于'
        }
    }
]
