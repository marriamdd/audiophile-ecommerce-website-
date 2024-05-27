import React, { useContext } from "react";
import { Audiophile_Context } from "../App";
import styled from "styled-components";
import EmptyCart from "./EmptyCart";
import { CartIContainer } from "../stylesComponents/CartContainerStyles";

export default function CartContent() {
  const { cartItems, setShowCart } = useContext(Audiophile_Context);
  let formattedPrice = "";
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const format = cartItems.map((item) => {
    if (item.price) {
      formattedPrice = `$${(item?.price / 1000).toFixed(3)}`;
    }
  });

  return (
    <div className="cartComponent">
      <BlurDiv onClick={() => setShowCart(false)}></BlurDiv>
      {cartItems.length == 0 ? (
        <EmptyCart />
      ) : (
        <CartIContainer>
          <div className="cartHeader">
            <h2>Cart ({cartItems.length})</h2>
            <span>Remove all</span>
          </div>

          {cartItems.map((item) => (
            <div key={Math.random() * Math.random()} className="cartItem">
              <img src={item.img} alt="" />
              <div className="price_name_div">
                <h3>{item.name}</h3>
                <span>{formattedPrice}</span>
              </div>
              <div className="countContainer">
                <span className="minus">-</span>
                <input readOnly value={item.quantity} />
                <span className="plus">+</span>
              </div>
            </div>
          ))}
        </CartIContainer>
      )}
    </div>
  );
}

const BlurDiv = styled.div`
  opacity: 0.4;
  background: #000;
  position: absolute;
  z-index: 99999;
  width: 100%;
  height: 100%;
  top: 0;
  /* bottom: 2rem; */
  left: 0;
  right: 0;
`;
