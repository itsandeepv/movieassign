// reducers/postReducer.js
const initialState = {
    searchValue: "",
    fitlersValue:{},
    loading: false,
    error: null,
  };
  
  const filterReduccer = (state = initialState, action) => {
    switch (action.type) {
      case 'Search':
        // console.log(state);
        return { ...state, loading: false, searchValue: action.payload  , error: null };
      case 'addfilter':
        // console.log(state.data ,"<<<");
        return { ...state, loading: false, fitlersValue: action.payload ,searchValue: "", };
      case 'removeFilter':
        // console.log(state.data ,"<<<");
        return { ...state, loading: false, fitlersValue: {} ,searchValue: "",};
      default:
        return state;
    }
  };
  
  export default filterReduccer;