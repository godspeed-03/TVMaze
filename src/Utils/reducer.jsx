const reducer = (state, action) => {
  switch (action.type) {
    case "Get_datas":
      return {
        ...state,
        data: action.payload.data,
        loading: false,
      };

    // case "remove_post":
    //   return {
    //     ...state,
    //     data: state.data.filter((item) => {
    //       return item.id !== action.payload;
    //     }),
    //   };

    case "Searchpost":
      return {
        ...state,
        query: action.payload,
      };
  }
  return state;
};

export default reducer;
