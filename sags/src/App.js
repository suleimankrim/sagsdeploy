import { Table } from "./Components/Table/Table";
import { Header } from "./Components/header/Header";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchBoxContainer } from "./Components/SearchBoxContainer/SearchBoxContainer";
import { SheetPage } from "./Components/SheetPage/SheetPage";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <SheetPage/>
            }
          />
          {/* <Route index element={<Home />} /> */}
        </Routes>
      </BrowserRouter>

    </>
  );
};
export default App;