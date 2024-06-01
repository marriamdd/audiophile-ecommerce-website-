import { CartIContainer } from "../stylesComponents/CartContainerStyles";

export default function EmptyCart() {
  return (
    <CartIContainer
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
