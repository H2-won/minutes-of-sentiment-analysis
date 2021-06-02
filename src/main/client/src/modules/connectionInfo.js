import produce from 'immer';

/*
	Thunk Actions
*/

/*
	Actions
*/
const SET_CONNECTION_INFO = 'connectionInfo/SET_CONNECTION_INFO';

export const setConnectionInfo = (connectionInfo) => ({
  type: SET_CONNECTION_INFO,
  payload: connectionInfo,
});

/*
	InitialState
*/
const initialState = {
  connectionInfo: null,
};

/*
	Reducer
*/
export default function connectionInfo(state = initialState, action) {
  switch (action.type) {
    case SET_CONNECTION_INFO:
      return produce(state, (draft) => {
        draft.connectionInfo = action.payload;
      });
    default:
      return state;
  }
}
