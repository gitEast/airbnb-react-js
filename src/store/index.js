import { configureStore } from '@reduxjs/toolkit';
import homeSlice from './modules/home';
import entireSlice from './modules/entire';

const store = configureStore({
  home: homeSlice,
  entire: entireSlice
});

export default store;
