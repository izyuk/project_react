export default function (state={}, action) {
  switch (action.type) {
    case 'PROJ_SELECTED':
      return action.payload
      break;
    default:
      return state;
  }
}
