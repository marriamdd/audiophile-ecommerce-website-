import { useContext } from "react";
import { CartIContainer } from "../stylesComponents/CartContainerStyles";
import { Audiophile_Context } from "../App";

export default function EmptyCart() {
  const { setShowCart } = useContext(Audiophile_Context);
  return (
    <CartIContainer
      onClick={() => setShowCart(false)}
      style={{
        height: "20rem",
        textDecoration: "underline",
        justifyContent: "flex-start",
        paddingTop: "2rem",
      }}
    >
      <span>Your cart is empty.</span>
    </CartIContainer>
  );
}
