import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// window.addEventListener('load', () => {
//     if (!('serviceWorker' in navigator)) {
//       console.log('Service Worker isn\'t supported on this browser,')
//         // Service Worker isn't supported on this browser, disable or hide UI.
//         return;
//     }
//
//     if (!('PushManager' in window)) {
//         console.log('Push isn\'t supported on this browser')
//         // Push isn't supported on this browser, disable or hide UI.
//         return;
//     }
//     console.log(navigator)
//
//     let promiseChain = new Promise((resolve, reject) => {
//         const permissionPromise = Notification.requestPermission(result => {
//             resolve(result);
//         });
//
//         if (permissionPromise) {
//             permissionPromise.then(resolve);
//         }
//     })
//         .then(result => {
//             if (result === 'granted') {
//                 execute();
//             }
//             else {
//                 console.log('no permission');
//             }
//         });
// });

// function registerServiceWorker() {
//     return navigator.serviceWorker.register('service-worker.js')
//         .then(registration => {
//             console.log('Service worker successfully registered.');
//             return registration;
//         })
//         .catch(err => {
//             console.error('Unable to register service worker.', err);
//         });
// }

// function execute() {
//     registerServiceWorker().then(registration => {
//         registration.showNotification('杨大帅比！！！');
//     });
// }