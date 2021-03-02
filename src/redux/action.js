import * as ActionTypes from './ActionTypes';

///const baseurl = `https://api.unsplash.com/search/photos?query=${search}&client_id=XXd6XB2uPCbppyZApgJzeyViYKd9AkZLAwatXYc6aD8`;


export const img_load = () => ({ type: ActionTypes.img_load });
export const img_add = (imgs) => ({ type: ActionTypes.img_add, payload: imgs });
export const img_fail = (err) => ({ type: ActionTypes.img_fail, payload: err });



export const fetchDocs = (search) => (dispatch) => {
    dispatch(img_load(true))
    console.log(typeof (search))
    return fetch(`https://api.unsplash.com/search/photos?query=${search}&client_id=XXd6XB2uPCbppyZApgJzeyViYKd9AkZLAwatXYc6aD8&per_page=50`)
        .then(resp => {
            if (resp.ok) {
                return resp;
            }
            else {
                var error = new Error("Error" + resp.status + ":" + resp.statusText);
                error.response = resp;
                throw error;
            }
        }, err => {
            var error = new Error(err.message);
            throw error;
        })
        .then(resp => resp.json())
        .then(resp => dispatch(img_add(resp)))
        .catch(error => dispatch(img_fail(error.message)))
}