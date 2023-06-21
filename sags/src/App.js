import { Table } from "./Components/Table/Table";
import { Header } from "./Components/header/Header";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchBoxContainer } from "./Components/SearchBoxContainer/SearchBoxContainer";
import TableFooter from "./Components/Table/TableFooter/TableFooter";
import CustomScroll from 'react-custom-scroll';
const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
              <CustomScroll>
                <SearchBoxContainer />
                </CustomScroll>
                <Table />
              </>
            }
          />
          {/* <Route index element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
      <TableFooter />
    </>
  );
};
export default App;