import { Table } from "./Components/Table/Table";
import { Header } from "./Components/header/Header";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchBoxContainer } from "./Components/SearchBoxContainer/SearchBoxContainer";
import { SheetPage } from "./Components/SheetPage";
import LoginPage from "./LoginPage/LoginPage";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact path="/"
            element={
              <LoginPage></LoginPage>
              
            }
            
          />
           <Route
            exact path="/table"
            element={
              <>
              <Header></Header>
              <SearchBoxContainer></SearchBoxContainer>
              <Table></Table>
              </>
            }
            
          />
          {/* <Route index element={<Home />} /> */}
        </Routes>
      </BrowserRouter>

    </>
  );
};
export default App;