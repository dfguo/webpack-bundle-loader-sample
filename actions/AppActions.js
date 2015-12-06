import AppDispatcher from '../dispatcher/AppDispatcher'
import { ActionTypes } from '../constants/AppConstants'

export default {
  updateText: (text) => {
    AppDispatcher.dispatch({
      actionType: ActionTypes.UPDATE_TEXT,
      text: text
    })
  },
  updateSelection: (selection) => {
    AppDispatcher.dispatch({
      actionType: ActionTypes.UPDATE_SELECTION,
      selection: selection
    })
  }
}