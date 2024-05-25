import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Earphones from "./pages/Earphones";
import HeadPhones from "./pages/HeadPhones";
import Speakers from "./pages/Speakers";
import SingleProduct from "./pages/SingleProduct";
import Header from "./components/Header";
import Data from "./data.json";
import { createContext, useState } from "react";
import { IProduct } from "./types/Types";
import Footer from "./components/Footer";

export const Audiophile_Context = createContext<{
  data: IProduct[];
  setData: React.Dispatch<React.SetStateAction<IProduct[]>>;
  menuButton: boolean;
  setMenuButton: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  data: [],
  setData: () => {},
  menuButton: false,
  setMenuButton: () => {},
});
function App() {
  const [data, setData] = useState<IProduct[]>(Data);
  const [menuButton, setMenuButton] = useState(false);

  return (
    <>
      <Audiophile_Context.Provider
        value={{ data, setData, menuButton, setMenuButton }}
      >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/EarPhones" element={<Earphones />} />
            <Route path="/HeadPhones" element={<HeadPhones />} />
            <Route path="/Speakers" element={<Speakers />} />
            <Route path={"/single/:name"} element={<SingleProduct />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Audiophile_Context.Provider>
    </>
  );
}

export default App;
