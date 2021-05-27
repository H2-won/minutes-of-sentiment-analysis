import produce from 'immer';

/*
	Thunk Actions
*/

/*
	Actions
*/
const SET_MAIN_VIDEO = 'meeting/SET_MAIN_VIDEO';

export const setMainVideo = (mainVideo) => ({
  type: SET_MAIN_VIDEO,
  payload: mainVideo,
});

/*
	InitialState
*/
const initialState = {
  mainVideo: null,
};

/*
	Reducer
*/
export default function meeting(state = initialState, action) {
  switch (action.type) {
    case SET_MAIN_VIDEO:
      return produce(state, (draft) => {
        draft.mainVideo = action.payload;
      });
    default:
      return state;
  }
}
