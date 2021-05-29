import produce from 'immer';

/*
	Thunk Actions
*/

/*
	Actions
*/
const SET_MEETING_INFO = 'meeting/SET_MEETING_INFO';

export const setMeetingInfo = (meetingInfo) => ({
  type: SET_MEETING_INFO,
  payload: meetingInfo,
});

/*
	InitialState
*/
const initialState = {
  meetingInfo: null,
};

/*
	Reducer
*/
export default function meetingLog(state = initialState, action) {
  switch (action.type) {
    case SET_MEETING_INFO:
      return produce(state, (draft) => {
        draft.meetingInfo = action.payload;
      });
    default:
      return state;
  }
}
