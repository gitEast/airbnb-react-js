import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getHomeHighScoreData,
  getHomeGoodPriceData,
  getHomeDiscountData,
  getHomeHotRecommendData,
  getHomePlusData,
  getHomeLongforData
} from 'services/modules/home';

const fetchHomeDataAction = createAsyncThunk(
  'fetchdata',
  async (payload, { dispatch }) => {
    getHomeHighScoreData().then((res) =>
      dispatch(changeHighScoreInfoAction(res))
    );
    getHomeGoodPriceData().then((res) =>
      dispatch(changeGoodPriceInfoAction(res))
    );
    getHomeDiscountData().then((res) =>
      dispatch(changeDiscountInfoAction(res))
    );
    getHomeHotRecommendData().then((res) =>
      dispatch(changeHotRecommendInfoAction(res))
    );
    getHomePlusData().then((res) => dispatch(changePlusInfoAction(res)));
    getHomeLongforData().then((res) => dispatch(changeLongforInfoAction(res)));
  }
);

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    highScoreInfo: {},
    goodPriceInfo: {},
    discountInfo: {},
    hotRecommendInfo: {},
    plusInfo: {},
    longforInfo: {}
  },
  reducers: {
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload;
    },
    changeHotRecommendInfoAction(state, { payload }) {
      state.hotRecommendInfo = payload;
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload;
    },
    changeLongforInfoAction(state, { payload }) {
      state.longforInfo = payload;
    }
  }
});

export default homeSlice.reducer;
export { fetchHomeDataAction };
export const {
  changeHighScoreInfoAction,
  changeGoodPriceInfoAction,
  changeDiscountInfoAction,
  changeHotRecommendInfoAction,
  changePlusInfoAction,
  changeLongforInfoAction
} = homeSlice.actions;
