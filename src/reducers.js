import { createAction, handleActions } from 'redux-actions';

export const SCREENS = [
  {device: 'iPhone 7', os: 'iOS', width: 750, height: 1334},
  {device: 'iPhone 7+', os: 'iOS', width: 1080, height: 1920},
  {device: 'Samsung Galaxy S6', os: 'Android', width: 1440, height: 2560},
  {device: 'Google Pixel', os: 'Android', width: 1800, height: 1920},
  {device: 'iPhone 4', os: 'iOS', width: 640, height: 960},
  {device: 'Nokia Lumia', os: 'Windows', width: 480, height: 800},
  {device: 'iPhone 3G', os: 'iOS', width: 320, height: 480},
].map(item => ({ratio: (item.height / item.width).toFixed(2), ...item}));

export const LANGUAGES = ['en', 'ua', 'ru', 'es', 'pl', 'fr'];

const initialState = {
  scale: 50,
  screens: [SCREENS[0], SCREENS[1]],
  languages: [LANGUAGES[0], LANGUAGES[1]],
  src: 'http://www.bbc.com',
  // src: "https://www.pexels.com"
};

export const setScale = createAction('SET_SCALE');
export const setSrc = createAction('SET_SRC');
export const setScreens = createAction('SET_SCREENS');
export const setLanguages = createAction('SET_LANGUAGES');

// TODO: doesn't work correctly (languages and screens multiselect is not re-rendered)
export const resetState = createAction('RESET_STATE');

const reducer = handleActions(
  {
    [setScale]: (state, action) => ({ ...state, scale: action.payload}),
    [setSrc]: (state, action) => ({ ...state, src: action.payload}),
    [setLanguages]: (state, action) => ({ ...state, languages: action.payload}),
    [setScreens]: (state, action) => ({ ...state, screens: action.payload}),
    [resetState]: () => ({ ...initialState}),
  },
  initialState
);

export default reducer;
