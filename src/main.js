import Vue from 'vue'
import App from './App.vue'
import GAuth from 'vue-google-oauth2'


const gauthOption = {
  clientId: '738046604527-chvd7ddkl6o80g181mvntrv3fdu6al74.apps.googleusercontent.com'
}
Vue.use(GAuth, gauthOption)

new Vue ({
    render: createElement => createElement(App)
}).$mount('#app')
