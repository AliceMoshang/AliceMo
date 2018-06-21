// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import Customers from './components/Customers'
import About from './components/About'
import Add from './components/Add'
import CustomerDetials from './components/CustomerDetials'
import Edit from './components/Edit'

import '../static/css/common.css'
import '../static/css/font/iconfont.css'
import axios from 'axios'


import {
	Button,Select, Option,
	Checkbox,
  	CheckboxButton,
  	CheckboxGroup,
  	TimeSelect,
  	TimePicker,
  } from 'element-ui';
Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(TimeSelect);
Vue.use(TimePicker);



Vue.config.productionTip = false
Vue.prototype.$http =axios
Vue.use(VueRouter)

const router = new VueRouter({
	mode:"history",
	base:__dirname,
	routes:[
	{path:"/",component:Customers},
	{path:"/about",component:About},
	{path:"/add",component:Add},
	{path:"/cdetials/:id",component:CustomerDetials},
	{path:"/edit/:id",component:Edit},
	]
})
/* eslint-disable no-new */
new Vue({
  el:'#app',
  router,
  render: h => h(App),
 
})
