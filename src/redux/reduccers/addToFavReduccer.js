// reducers/postReducer.js
const initialState = {
    data: [],
    loading: false,
    error: null,
  };
  
  const addToFavReduccer = (state = initialState, action) => {
    switch (action.type) {
      case 'AddFavourite':
        // console.log(state);
        return { ...state, loading: false, data: [...state?.data , action.payload]  , error: null };
      case 'RemoveFavourite':
        let updatedArray = state?.data?.filter((item)=>item?.id != action.payload?.id)
        // console.log(state.data ,"<<<");
        return { ...state, loading: false, data: updatedArray };
      default:
        return state;
    }
  };
  
  export default addToFavReduccer;