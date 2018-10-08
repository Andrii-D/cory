import {
  SET_LANGUAGES,
  SET_SCALE,
  SET_SCREENS,
  SET_URL,
  RESET_STATE,
} from './action-types';
import {LANGUAGES, SCREENS} from './App';
import { combineReducers } from 'redux'

const initialState = {
  scale: 50,
  screens: [SCREENS[0], SCREENS[1]],
  languages: [LANGUAGES[0], LANGUAGES[1]],
  src: 'http://www.bbc.com',
// src: "https://www.pexels.com"
};

const scaleReducer = (state = initialState.scale, action) => (action.type === SET_SCALE) ? action.payload : state
const srcReducer = (state = initialState.src, action) => (action.type === SET_URL) ? action.payload : state
const languagesReducer = (state = initialState.languages, action) => (action.type === SET_LANGUAGES) ? action.payload : state
const screensReducer = (state = initialState.screens, action) => (action.type === SET_SCREENS) ? action.payload : state

const resetReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_STATE:
      return {...initialState};
    default:
      return state;
  }
};

const rootReducer = combineReducers({
    scale: scaleReducer,
    src: srcReducer,
    screens: screensReducer,
    languages: languagesReducer
});
export default rootReducer;