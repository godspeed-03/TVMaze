const reducer = (state, action) => {
  switch (action.type) {
    case "Get_datas":
      return {
        ...state,
        data: action.payload.data,
        loading: false,
      };

  }
  return state;
};

export default reducer;
