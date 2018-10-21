/* eslint-disable no-console */

import { register } from 'register-service-worker'

// if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready (res) {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
        console.log(res)
        res.showNotification('这是一条通知！！！')
    },
    cached (res) {
      console.log('Content has been cached for offline use.')
        console.log(res)
    },
    updated (res) {
      console.log('New content is available; please refresh.')
        console.log(res)

    },
    offline (res) {
      console.log('No internet connection found. App is running in offline mode.')
        console.log(res)

    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
// }
