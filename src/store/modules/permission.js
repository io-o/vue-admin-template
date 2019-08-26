import { constantRoutes, map } from '@/router'
import Layout from '@/layout'

/*
  递归后端路由，处理成前端可识别路由
*/
export function filterAsyncRoutes(routes) {
  const arr = routes.filter(route => {
    if (route.component) {
      if (route.component === 'Layout') {
        route.component = Layout
      } else {
        route.component = map[route.component]
      }
    }
    if (route.children && route.children.length) {
      route.children = filterAsyncRoutes(route.children)
    }
    return true
  })

  return arr
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  generateRoutes({ commit }, roles) {
    return new Promise(resolve => {
      // 模拟路由数据
      const data = [
        {
          'path': '/form',
          'component': 'Layout',
          meta: {
            title: 'Table',
            icon: 'table'
          },
          children: [
            {
              path: 'form',
              name: 'form',
              component: 'form',
              meta: {
                title: 'form',
                icon: 'form'
              }
            },
            {
              path: 'test',
              name: 'test',
              component: 'test',
              meta: {
                title: 'test',
                icon: 'form'
              }
            }
          ]
        }
      ]
      const accessedRoutes = filterAsyncRoutes(data)
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
