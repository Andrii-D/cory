import {SET_LANGUAGES, SET_SCALE, SET_SCREENS, SET_URL, RESET_STATE} from './action-types';
import {LANGUAGES, SCREENS} from './App';
const initialState = {
  scale: 50,
  screens: [SCREENS[0], SCREENS[1]],
  languages: [LANGUAGES[0], LANGUAGES[1]],
  // src: "https://www.pexels.com"
  src: 'http://www.bbc.com',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCALE:
      return {...state, scale: action.payload};
    case SET_URL:
      return {...state, src: action.payload};
    case SET_SCREENS:
      return {...state, screens: action.payload};
    case SET_LANGUAGES:
      return {...state, languages: action.payload};
    case RESET_STATE:
      return {...initialState};
    default:
      return state;
  }
};

export default rootReducer;
