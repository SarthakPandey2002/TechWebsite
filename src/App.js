import React from "react";
import Search from "./Search";
import Pagination from "./Pagination";
import Stories from "./Stories";
import "./App.css";
// // import { useContext } from "react";
// // import { AppContext } from "./context";
// import { useGlobalContext } from "./context";
const App = () => {
  // const data = useGlobalContext();
  return (
    <>
      <Search />
      <Pagination />
      <Stories />
    </>
  );
};

export default App;
