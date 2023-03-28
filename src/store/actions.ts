import {FETCH_PRODUCTS} from "./actionTypes";

// const fetchProducts = (dispatch: Function) => {
//     dispatch()
//     return {
//         type: FETCH_PRODUCTS,
//         payload: data
//     }
// }

const setSearchParam = (searchValue: string) => {
    return {
        type: 'SET_SEARCH_PARAM',
        payload: searchValue
    }
}



export {
    // getListOfAlbums,
    // setSearchParam
}