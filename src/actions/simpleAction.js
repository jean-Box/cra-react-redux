export const SIMPLE_ACTION = 'SIMPLE_ACTION'
export const IMAGE_CLICK = 'IMAGE_CLICK'

export const simpleAction = () => dispatch => {
    dispatch({
        type: SIMPLE_ACTION,
        payload: 'result_of_simple_action'
    })
}

export const imageClick = () => (dispatch, getState) => {
    console.log(getState())
    dispatch({
        type: IMAGE_CLICK,
        rotation: !getState().rotation
    }) 
}