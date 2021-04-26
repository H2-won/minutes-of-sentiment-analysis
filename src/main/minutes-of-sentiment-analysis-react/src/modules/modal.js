import produce from 'immer';

/*
	Thunk Actions
*/

/*
	Actions
*/
const OPEN_MODAL = 'modal/OPEN_MODAL';
const CLOSE_MODAL = 'modal/CLOSE_MODAL';

export const openModal = (id, elem, args) => ({
  type: OPEN_MODAL,
  payload: { id, elem, args },
});
export const closeModal = (id) => ({ type: CLOSE_MODAL, payload: id });

/*
	InitialState
*/
const initialState = {
  modalList: [],
};

/*
	Reducer
*/
export default function modal(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return produce(state, (draft) => {
        draft.modalList.push(action.payload);
      });
    case CLOSE_MODAL:
      return produce(state, (draft) => {
        draft.modalList = [];
      });
    default:
      return state;
  }
}
