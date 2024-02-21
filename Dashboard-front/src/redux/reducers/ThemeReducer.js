const initialState = {
    isDark: true,
}
export default function(state = initialState,action){
    switch(action.type){
        case 'DARK':
            return {
                ...state,
                isDark: true
            }
        case 'LIGHT':
            return {
                ...state,
                isDark: false
                
            }
        default:
            return state;
    }
}