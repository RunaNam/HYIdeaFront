import React from 'react';
import Router from './Component/Router';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyles from "./Component/GlobalStyles";


function App() {
  return (
    <>
      <Router/>
      <GlobalStyles/>
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default App;
