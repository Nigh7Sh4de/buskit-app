import { ActionConst } from 'react-native-router-flux'

const initialState = {
  scene: {},
}

export default (state = initialState, {type, scene}) => {+
    console.log('Reducing action: ', type);
    switch(type) {
        // case ActionConst.FOCUS:
        //     console.log('navigated to ', scene)
        //     return { ...state, scene }
        default:
            return state
    }    
}