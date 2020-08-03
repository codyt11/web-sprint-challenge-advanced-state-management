import { FETCH_DATA, FETCH_SUCCESS, FETCH_FAIL, POST_SUCCESS, POST_DATA, POST_FAIL } from "../actions/actions";

const initialState = {
    smurfs: [],
    isFetching: false,
    isPosting: false,
    error: ""
}

const smurfsReducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_DATA:
            return{
                ...state,
                isFetching: true
            }
        case FETCH_SUCCESS:
            return{
                ...state,
                isFetching: false,
                smurfs: action.payload
            }
        case FETCH_FAIL:
            return{
                ...state,
                isFetching: false,
                error: action.payload
            }
        case POST_DATA:
            return{
                ...state,
                isPosting: true,
                smurfs: [...state.smurfs]
            }
        case POST_SUCCESS:
            return{
                ...state,
                isPosting: false,
                smurfs: action.payload
            }
        case POST_FAIL:
            return{
                ...state,
                isPosting: false,
                smurfs: action.payload
            }

            default: 
            return state
    }
}

export default smurfsReducer;