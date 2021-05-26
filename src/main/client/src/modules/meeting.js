// import produce from 'immer';

// /*
// 	Thunk Actions
// */

// /*
// 	Actions
// */
// const TOGGLE_MICROPHONE = 'meeting/TOGGLE_MICROPHONE';
// const TOGGLE_VIDEO = 'meeting/TOGGLE_VIDEO';
// const START_SPEECH_RECOGNITION = 'meeting/START_SPEECH_RECOGNITION';
// const STOP_SPEECH_RECOGNITION = 'meeting/STOP_SPEECH_RECOGNITION';
// const CLOSE_SOCKET = 'meeting/CLOSE_SOCKET';

// export const toggleMicrophone = (id, elem, args) => ({
//   type: OPEN_MODAL,
//   payload: { id, elem, args },
// });
// export const toggleVideo = (id) => ({ type: CLOSE_MODAL, payload: id });

// /*
// 	InitialState
// */
// const initialState = {
//   mainVideo: null,
//   recordFlag: 0,
//   hostState: false,
// };

// /*
// 	Reducer
// */
// export default function modal(state = initialState, action) {
//   switch (action.type) {
//     case OPEN_MODAL:
//       return produce(state, (draft) => {
//         draft.modalList.push(action.payload);
//       });
//     case CLOSE_MODAL:
//       return produce(state, (draft) => {
//         draft.modalList = [];
//       });
//     default:
//       return state;
//   }
// }
