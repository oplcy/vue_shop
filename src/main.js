installElement3(app)
app.mount('#app')
import router from './router'
import installElement3 from './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
