import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

// DASHBOARD ROUTES
import { MainContainer } from './templates/MainContainer'
import { TypingContest } from './templates/TypingContest'



Vue.use(Router)
Vue.use(axios)


export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    { path: '*', redirect: '/'},
    {
      path: '/',
      name: 'MainContainer',
      component: MainContainer,
      children: [
        { name: 'TypingContest', path: '/typing-contest', component: TypingContest },
        { name: 'TicTacToe', path: '/tic-tac-toe', component: TypingContest },
        { name: 'RockPaperScissors', path: '/rock-paper-scissors', component: TypingContest },
        { name: 'CardGuessingGame', path: '/card-guessing-game', component: TypingContest },
      ]
    },
  ]
})
