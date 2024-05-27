import { useContext } from "react";
import HomeHeaderComponent from "../components/HomeHeaderComponent";
import { Audiophile_Context } from "../App";
import CartContent from "../components/CartContent";

function Home() {
  const { showCart } = useContext(Audiophile_Context);
  return (
    <main>
      {showCart && <CartContent />}
      <HomeHeaderComponent />
    </main>
  );
}

export default Home;
