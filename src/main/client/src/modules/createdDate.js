import produce from 'immer';

/*
	Thunk Actions
*/

/*
	Actions
*/
const SET_CREATED_DATE = 'createdDate/SET_CREATED_DATE';

export const setCreatedDate = (date) => ({
  type: SET_CREATED_DATE,
  payload: date,
});

/*
	InitialState
*/
const initialState = {
  date: null,
};

/*
	Reducer
*/
export default function createdDate(state = initialState, action) {
  switch (action.type) {
    case SET_CREATED_DATE:
      return produce(state, (draft) => {
        draft.date = action.payload;
      });
    default:
      return state;
  }
}
