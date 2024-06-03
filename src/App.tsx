import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Earphones from "./pages/Earphones";
import HeadPhones from "./pages/HeadPhones";
import Speakers from "./pages/Speakers";
import SingleProduct from "./pages/SingleProduct";
import Header from "./components/Header";
import Data from "./data.json";
import { createContext, useEffect, useState } from "react";
import { IProduct } from "./types/Types";
import Footer from "./components/Footer";
import Checkout from "./pages/Checkout";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  img: string;
};
export const Audiophile_Context = createContext<{
  data: IProduct[];
  setData: React.Dispatch<React.SetStateAction<IProduct[]>>;
  menuButton: boolean;
  setMenuButton: React.Dispatch<React.SetStateAction<boolean>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  thanksComponent: boolean;
  setThanksComponent: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  showCheckOut: boolean;
  setShowCheckOut: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  data: [],
  setData: () => {},
  menuButton: false,
  setMenuButton: () => {},
  category: "",
  setCategory: () => {},
  thanksComponent: false,
  setThanksComponent: () => {},
  cartItems: [],
  setCartItems: () => {},
  showCart: false,
  setShowCart: () => {},
  quantity: 1,
  setQuantity: () => {},
  showCheckOut: false,
  setShowCheckOut: () => {},
});
function App() {
  const [data, setData] = useState<IProduct[]>(Data);
  const [menuButton, setMenuButton] = useState(false);
  const [category, setCategory] = useState("");
  const [thanksComponent, setThanksComponent] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckOut, setShowCheckOut] = useState(false);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    if (cartItems.length > 0) {
      setShowCheckOut(true);
    }
  }, []);

  return (
    <>
      <Audiophile_Context.Provider
        value={{
          cartItems,
          setCartItems,
          thanksComponent,
          setThanksComponent,
          data,
          setData,
          menuButton,
          setMenuButton,
          category,
          setCategory,
          showCart,
          setShowCart,
          quantity,
          setQuantity,
          showCheckOut,
          setShowCheckOut,
        }}
      >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/EarPhones" element={<Earphones />} />
            <Route path="/HeadPhones" element={<HeadPhones />} />
            <Route path="/Speakers" element={<Speakers />} />
            <Route path={"/single/:name"} element={<SingleProduct />} />
            <Route path="/Checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Audiophile_Context.Provider>
    </>
  );
}

export default App;
