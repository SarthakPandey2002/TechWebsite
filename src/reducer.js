const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_STORIES":
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter((curEle) => curEle.objectID !== action.payload),
      };
    case "search_query":
      return {
        ...state,
        query: action.payload,
      };
    case "next_page":
      let pageNumInc = state.page + 1;
      if (pageNumInc >= state.nbPages) {
        pageNumInc = 0;
      }
      return {
        ...state,
        page: pageNumInc,
      };
    case "prev_page":
      let pageNum = state.page - 1;
      if (pageNum <= 0) {
        pageNum = 0;
      }
      return {
        ...state,
        page: pageNum,
      };
  }
  return state;
};

export default reducer;
