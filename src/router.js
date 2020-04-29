
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import error from './components/error.vue'
import Layout from './components/Layout.vue'
import Table1 from './pages/tables/table1.vue'
import Table2 from './pages/tables/table2.vue'
import Table3 from './pages/tables/table3.vue'
import Table4 from './pages/tables/table4.vue'
import Table5 from './pages/tables/table5.vue'
import Table6 from './pages/tables/table6.vue'
import Table7 from './pages/tables/table7.vue'
import Table8 from './pages/tables/table8.vue'
import Index from './pages/Index.vue'
const router = new VueRouter({
  routes: [
    {
      name: '首页',
      path: '/',
      component: HelloWorld,
      children: [
        {
          name: '演示',
          path: '/index',
          component: Index
        }
      ]
    },
    {
      name: '表格',
      path: '/table',
      component: Layout,
      children: [
        {
          name: '表格1',
          path: 'table1',
          component: Table1,
        },
        {
          name: '表格2',
          path: 'table2',
          component: Table2,
          meta: { requiresAuth: true }
        },
        {
          name: '表格3',
          path: 'table3',
          component: Table3,
        },
        {
          name: '表格4',
          path: 'table4',
          component: Table4,
        },
        {
          name: '表格5',
          path: 'table5',
          component: Table5,
        },
        {
          name: '表格6',
          path: 'table6',
          component: Table6,
        },
        {
          name: '表格7',
          path: 'table7',
          component: Table7,
        },
        {
          name: '表格8',
          path: 'table8',
          component: Table8,
        },
      ]
    },
   
           
        
    {
      path: '*',
      component: error
    }
  ]
})


// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAuth) { // 判断该路由是否需要登录权限
//     window.console.log('p')
//       next()
//   } else {
//     window.console.log('q')
//     if(localStorage.getItem("token") || to.path === '/'){
//       next();
//     }else{
//       next('/');
//     }
//   }
// });


export default router