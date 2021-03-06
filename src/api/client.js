// Include and set up feathers client
const Feathers = require('feathers/client')
const hooks = require('feathers-hooks')
const authentication = require('feathers-authentication/client')
const socketio = require('feathers-socketio/client')
const io = require('socket.io-client')

const socket = io('http://localhost:3030/')
const feathers = Feathers()
.configure(socketio(socket))
.configure(hooks())
.configure(authentication({storage: window.localStorage}))

// Include it as a CommonJS module
const Vue = require('vue')
const vueFeathers = require('vue-feathers')

// And plug it in
Vue.use(vueFeathers)
