/* eslint-disable no-undef */
const events = require('events')
const eventEmitter = new events.EventEmitter()

class Observer {
  constructor () {
    this.listObserver = []
  }

  on (key, func) {
    eventEmitter.on(key, func)
  }

  emit (key, object) {
    eventEmitter.emit(key, object)
  }

  removeListener (key, func = () => {}) {
    eventEmitter.removeListener(key, func)
  }
}

const ObserverService = new Observer()
Object.freeze(ObserverService)

export default ObserverService
