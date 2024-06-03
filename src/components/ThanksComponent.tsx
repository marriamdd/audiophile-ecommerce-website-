import React, { useContext } from "react";
import styled from "styled-components";
import { Audiophile_Context } from "../App";
import { useNavigate } from "react-router-dom";
import { CartItemsStyles } from "./Summary";
import { useCartFunctions } from "./useCartsFunctions";
export default function ThanksComponent() {
  const { thanksComponent, setThanksComponent, cartItems } =
    useContext(Audiophile_Context);
  const { formatPrice, totalPrice, vat, grandTotal } = useCartFunctions();
  const navigate = useNavigate();
  return (
    <>
      {thanksComponent && (
        <>
          <BlurDiv onClick={() => setThanksComponent(false)}></BlurDiv>
          <ThanksStyles>
            <img src="/assets/checkout/icon-order-confirmation.svg" alt="" />
            <h2>THANK YOU FOR YOUR ORDER</h2>
            <p>You will receive an email confirmation shortly.</p>
            <div className="itemsDiv">
              <CartItemsStyles
                key={Math.random() * Math.random()}
                className="cartItem"
              >
                <img src={cartItems[0].img} alt="" />
                <div className="price_name">
                  <h3>{cartItems[0].name}</h3>
                  <span>{formatPrice(cartItems[0].price)}</span>
                </div>

                <span className="quantity">{`x${cartItems[0].quantity}`}</span>
              </CartItemsStyles>

              <div className="line"></div>
              {cartItems.length > 1 && (
                <span className="otherItemsLeft">
                  and {cartItems.length - 1} other item(s)
                </span>
              )}
            </div>
            <div>
              <h3>GRAND TOTAL</h3>
              <span style={{ color: "#D87D4A" }}>
                {formatPrice(grandTotal(totalPrice(), vat(totalPrice())))}
              </span>
            </div>
            <button onClick={() => navigate("/")}>back to home</button>
          </ThanksStyles>
        </>
      )}
    </>
  );
}
const BlurDiv = styled.div`
  opacity: 0.4;
  background: #000;
  position: fixed;
  z-index: 99999;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 2rem;
  left: 0;
  right: 0;
`;
const ThanksStyles = styled.div`
  width: 327px;
  top: 5rem;
  /* left: 2rem; */
  position: absolute;
  z-index: 99999999;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding-block: 3rem;
  /* padding-right: 3rem;  */
  justify-content: center;
  border-radius: 8px;
  background: #fff;
  .cartItem {
    padding-block: 3rem;
    padding-right: 2rem;
    width: 263px;
    border-radius: 8px;
  }
  .otherItemsLeft {
    align-self: center;
  }
  .itemsDiv {
    display: flex;
    flex-direction: column;

    padding-bottom: 2rem;
    padding-right: 2rem;
    width: 263px;
    border-radius: 8px;
    background: #f1f1f1;
  }
  .line {
    width: 75%;
    opacity: 0.08;
    background: #000;
    height: 1px;
    align-self: center;
  }
  button {
    border: none;
    width: 263px;
    height: 48px;
    background: #d87d4a;
    color: #fff;
    text-align: center;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  & > img {
    align-self: flex-start;
    width: 64px;
    height: 64px;
    margin-left: 3rem;
  }
  h2 {
    color: #000;
    width: 263px;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0.857px;
    text-transform: uppercase;
  }
  p {
    color: #000;
    font-family: Manrope;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    opacity: 0.5;
    width: 263px;
  }
`;
