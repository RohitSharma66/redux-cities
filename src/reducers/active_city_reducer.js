export default function(state = null, action) {
  switch (action.type) {
    case 'CITY SELECTED' : {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
