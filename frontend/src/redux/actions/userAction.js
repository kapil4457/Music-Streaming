import axios from "axios";
import {LOGIN_REQUEST,LOGIN_SUCCESS,CLEAR_ERRORS, LOGIN_FAIL,LOAD_FAIL,LOAD_REQUEST,LOAD_SUCCESS } from "../Constants/userConstant";



export const login =(info)=> async(dispatch)=>{
try{
    dispatch({type:LOGIN_REQUEST})
    const config = {headers : {"Content-Type" : "application/json"}};
    const {data} = await axios.post(`/api/v1/login` , info,config);
    await dispatch({type: LOGIN_SUCCESS , payload : data.user});

}catch(e)
{
    await dispatch({type:LOGIN_FAIL , payload : e.response.data.message})
}
}

export const loadUser = () => async (dispatch) => {
	try {
		dispatch({ type: LOAD_REQUEST });

		const { data } = await axios.get(`/api/v1/user/details`);
    		dispatch({
			type: LOAD_SUCCESS,
			payload: data.user,
		});
	} catch (error) {
		dispatch({ type: LOAD_FAIL, payload: error.response.data.message });
	}
};


export const clearErrors = () => async (dispatch) => {
	dispatch({
		type: CLEAR_ERRORS,
	});
};
