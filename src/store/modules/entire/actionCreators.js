import * as actionTypes from './constants';
import { getEntireRoomList } from 'services/modules/entire';

const changeRoomListAction = (roomList) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList
});

const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage
});

const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount
});

const changeIsLoading = (isLoading) => ({
  type: actionTypes.CHANGE_IS_LOADING,
  isLoading
});

const fetchEntireDataAction =
  (page = 0) =>
  async (dispatch) => {
    dispatch(changeCurrentPageAction(page));
    dispatch(changeIsLoading(true));
    const res = await getEntireRoomList(page * 20);
    dispatch(changeRoomListAction(res.list));
    dispatch(changeTotalCountAction(res.totalCount));
    dispatch(changeIsLoading(false));
  };

export {
  // changeRoomListAction,
  // changeCurrentPageAction,
  // changeTotalCountAction,
  fetchEntireDataAction
};
