const initialState = {}
export default function userReducers(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                ...action.payload.user
            }
        case 'LOGOUT_USER':
            return {};

        default:
            return state;
    }

}