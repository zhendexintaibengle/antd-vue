import Vue from "vue"
import axios from "axios"
import VueAxios from "vue-axios"

// 设置axios的基础路径属性,
// 后续利用axios发送的请求地址,会自动拼接到此路径后面
axios.defaults.baseURL="http://www.codeboy.com:9999/data/"
Vue.use(VueAxios,axios)
// 去main.js里面引入