import React, { useContext } from "react";
import { Audiophile_Context } from "../App";
import styled from "styled-components";
import EmptyCart from "./EmptyCart";
import { CartIContainer } from "../stylesComponents/CartContainerStyles";
import { Link } from "react-router-dom";

export default function CartContent() {
  const { setCartItems, cartItems, setShowCart } =
    useContext(Audiophile_Context);

  const formatPrice = (price: number) => {
    return `$${(price / 1000).toFixed(3)}`;
  };

  const totalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };
  const handleRemoveAll = () => {
    setCartItems([]);
  };
  const handleDecreaseQuantity = (itemId: number) => {
    const item = cartItems.find((item) => item.id === itemId);
    if (item && item.quantity > 1) {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id == itemId ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };

  const handleIncreaseQuantity = (itemId: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id == itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  console.log(cartItems);
  return (
    <div className="cartComponent">
      <BlurDiv onClick={() => setShowCart(false)}></BlurDiv>
      {cartItems.length == 0 ? (
        <EmptyCart />
      ) : (
        <CartIContainer>
          <div className="cartHeader">
            <h2>Cart ({cartItems.length})</h2>
            <span onClick={handleRemoveAll}>Remove all</span>
          </div>

          {cartItems.map((item) => (
            <div key={Math.random() * Math.random()} className="cartItem">
              <img src={item.img} alt="" />
              <div className="price_name_div">
                <h3>{item.name}</h3>
                <span>{formatPrice(item.price)}</span>
              </div>
              <div className="countContainer">
                <span
                  onClick={() => handleDecreaseQuantity(item.id)}
                  className="minus"
                >
                  -
                </span>
                <input readOnly value={item.quantity} />
                <span
                  onClick={() => handleIncreaseQuantity(item.id)}
                  className="plus"
                >
                  +
                </span>
              </div>
            </div>
          ))}

          <div className="total">
            <h3>TOTAL</h3>
            <span>{formatPrice(totalPrice())}</span>
          </div>

          <Link to="/Checkout">checkout</Link>
        </CartIContainer>
      )}
    </div>
  );
}

const BlurDiv = styled.div`
  opacity: 0.4;
  background: #000;
  position: fixed;
  z-index: 99999;
  width: 100%;
  height: 100%;
  top: 0rem;

  left: 0;
  right: 0;
`;
