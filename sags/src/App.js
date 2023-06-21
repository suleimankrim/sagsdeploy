import React from 'react'
import { Table } from './Components/Table/Table';
import { Header } from './Components/header/Header';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import { SearchBoxContainer } from './Components/SearchBoxContainer/SearchBoxContainer';
 const App = () => {
  return (
    <>
     <Header/>
    <BrowserRouter>
      <Routes>
     
        <Route path="/" element={<><SearchBoxContainer/><Table/></>}/>
          {/* <Route index element={<Home />} /> */}
    
          
      </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;