import { LOGIN_SUCCESS ,LOGIN_FAIL,LOGIN_REQUEST, CLEAR_ERRORS,LOAD_FAIL,LOAD_REQUEST,LOAD_SUCCESS} from "../Constants/userConstant";



export const userReducer = (state = {user:{}} , action)=>{
    switch(action.type){
        case  LOGIN_REQUEST :
            case LOAD_REQUEST:

                return {
                    loading:true,
                    isAuthenticated:false
                }
        case LOGIN_SUCCESS : 
        case LOAD_SUCCESS:

                return {
                    ...state,
                    loading:false,
                    isAuthenticated:true,
                    user: action.payload
                }
        case LOGIN_FAIL :
                return {
                    ...state,
                    loading:false,
                    isAuthenticated:false,
                    user:null,
                    error:action.payload
                }

                case LOAD_FAIL:
                    return {
                        loading: false,
                        isAuthenticated: false,
                        user: null,
                        error: action.payload,
                    };
        case CLEAR_ERRORS :
                return {
                    ...state,
                    error:null
                }
        
                 default:
                    return state
    }
}