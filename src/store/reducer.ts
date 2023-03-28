import * as actionTypes from "./actionTypes"

const initialState: any = {
    products: [],
}

const reducer = (
    state: any = initialState,
    action: any
  ): any => {
    switch (action.type) {
      case actionTypes.FETCH_PRODUCTS:
        return {
            ...state,
            albums: action.payload
          }
    // case actionTypes.SET_SEARCH_PARAM:
    //     return {
    //         ...state,
    //         searchParam: action.payload
    //     }
    }
    return state
  }

  export default reducer