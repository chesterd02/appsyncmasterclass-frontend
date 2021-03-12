import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import Amplify from 'aws-amplify';
import '@aws-amplify/ui-vue'
import router from './router'
import store from './store'

Amplify.configure({
  Auth: {
    region: 'us-west-1',
    userPoolId: 'us-west-1_zI8hZwomu',
    userPoolWebClientId: '1mcb1nqi2rf46pssr7ahu1d0qv',
    mandatorySignIn: true
  }
})

const myAppConfig = {
  'aws_appsync_graphqlEndpoint' : 'https://ixqnbger4jhinfp34x5m6vp75i.appsync-api.us-west-1.amazonaws.com/graphql',
  'aws_appsync_region' : 'us-west-1',
  'aws_appsync_authenticationType': 'AMAZON_COGNITO_USER_POOLS'
}

Amplify.configure(myAppConfig)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
