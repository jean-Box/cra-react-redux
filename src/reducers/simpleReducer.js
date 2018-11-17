import { SIMPLE_ACTION, IMAGE_CLICK } from './../actions/simpleAction';

const initialState = {
  rotation: false,
  result: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SIMPLE_ACTION:
      return {...state,
        result: action.payload
      }
      case IMAGE_CLICK:
      return {...state,
        rotation: !state.rotation
      }
    default:
      return state
  }
}

export const getRotation = state => state.simpleReducer.rotation