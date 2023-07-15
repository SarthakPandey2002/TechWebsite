import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
let API = "https://hn.algolia.com/api/v1/search?";
const initialState = {
  isLoading: true,
  query: "CSS",
  nbPages: 0,
  page: 0,
  hits: [],
};
const AppContext = React.createContext();
// Provider
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApiData = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await fetch(url);
      const data = await res.json();
      //isLoading = false;
      console.log(data);
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removePost = (post_ID) => {
    dispatch({ type: "REMOVE_POST", payload: post_ID });
  };

  const searchPost = (searchQuery) => {
    dispatch({ type: "search_query", payload: searchQuery });
  };

  const getNextPage = () => {
    dispatch({
      type: "next_page",
    });
  };

  const getPrevPage = () => {
    dispatch({
      type: "prev_page",
    });
  };

  useEffect(() => {
    fetchApiData(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return (
    <AppContext.Provider
      value={{ ...state, removePost, searchPost, getNextPage, getPrevPage }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
