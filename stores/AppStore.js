import _ from 'lodash'

import EventEmitter from 'events'
import AppDispatcher from '../dispatcher/AppDispatcher'
import AppConstants from '../constants/AppConstants'

const CHANGE_EVENT = 'app_change_event'
class AppStore extends EventEmitter {
  constructor() {
    super()
    this._data = {
      text: 'hello',
      selection: 1
    }
    this._init()    
  }
  
  getData() {
    return this._data
  }
  
  _init() {
    const ActionTypes = AppConstants.ActionTypes
    this._appDispatchToken = AppDispatcher.register((payload) => {
      switch (payload.actionType) {
        case ActionTypes.UPDATE_TEXT:          
          this._data.text = payload.text
          this.emitChange()
          break
        case ActionTypes.UPDATE_SELECTION:
          this._data.selection = payload.selection
          this.emitChange()
          break
        default:
          break
      }
    })
  }
  
  emitChange() {
    this.emit(CHANGE_EVENT, this._data)
  }
  addListener(cb) {
    this.on(CHANGE_EVENT, cb)
  }
  removeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb)
  }
}

module.exports = new AppStore()
