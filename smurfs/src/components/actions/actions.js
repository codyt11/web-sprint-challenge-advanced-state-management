import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const fetchSmurfs = () => (dispatch) => {
    dispatch({type: FETCH_DATA})
    axios
        .get("http://localhost:3333/smurfs")
        .then( res => {
             console.log("Fetch success", res.data);
        dispatch ({type: FETCH_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
        dispatch({type: FETCH_FAIL, payload: err})
    })
}

export const POST_DATA = "POST_DATA";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAIL = "POST_FAIL";

export const postSmurfs = (smurfs) => (dispatch) => {
    dispatch({type: POST_DATA})
    axios
        .post("http://localhost:3333/smurfs", smurfs)
        .then( res => {
             console.log("Post success", res.data);
        dispatch ({type: POST_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
        dispatch({type: POST_FAIL, payload: err})
    })
}