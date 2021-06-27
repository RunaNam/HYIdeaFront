import React from 'react';
import Router from './Component/Router';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file


function App() {
  return (
    <>
      <Router/>
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default App;
