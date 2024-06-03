import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Audiophile_Context } from "../App";
import { useNavigate } from "react-router-dom";
import { CartItemsStyles } from "./Summary";
import { useCartFunctions } from "./useCartsFunctions";
export default function ThanksComponent() {
  const { thanksComponent, setThanksComponent, cartItems, setShowCart } =
    useContext(Audiophile_Context);
  const { formatPrice, totalPrice, vat, grandTotal } = useCartFunctions();
  const navigate = useNavigate();
  const [showHoleCart, setShowHoleCart] = useState(false);
  return (
    <>
      {thanksComponent && (
        <>
          <BlurDiv onClick={() => setThanksComponent(false)}></BlurDiv>
          <ThanksStyles>
            <img src="/assets/checkout/icon-order-confirmation.svg" alt="" />
            <h2>THANK YOU FOR YOUR ORDER</h2>
            <p>You will receive an email confirmation shortly.</p>
            <div className="contentSideBySide">
              <div className="itemsDiv">
                <CartItemsStyles
                  key={Math.random() * Math.random()}
                  className="cartItem"
                >
                  {cartItems.map((item, index) => (
                    <ItemDiv
                      showHoleCart={showHoleCart}
                      index={index}
                      key={index}
                    >
                      <img src={item.img} alt="" />
                      <div style={{ display: "flex", gap: "2rem" }}>
                        <div className="price_name">
                          <h3>{item.name}</h3>
                          <span style={{ opacity: "0.5", fontSize: "14px" }}>
                            {formatPrice(item.price)}
                          </span>
                        </div>
                        <span className="quantity">{`x${item.quantity}`}</span>
                      </div>
                    </ItemDiv>
                  ))}
                </CartItemsStyles>

                <div className="line"></div>
                {cartItems.length > 1 && (
                  <span
                    onClick={() => {
                      setShowHoleCart(!showHoleCart);
                    }}
                    className="otherItemsLeft"
                  >
                    {showHoleCart
                      ? `View less`
                      : `and ${cartItems.length - 1} other item(s)`}
                  </span>
                )}
              </div>
              <div className="grandTotalDiv">
                <h3>GRAND TOTAL</h3>
                <span>
                  {formatPrice(grandTotal(totalPrice(), vat(totalPrice())))}
                </span>
              </div>
            </div>
            <button
              onClick={() => {
                navigate("/");
                setShowCart(false);
              }}
            >
              back to home
            </button>
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
const ItemDiv = styled.div<{ index: number; showHoleCart: boolean }>`
  display: ${(props) => (props.index == 0 ? "flex" : "none")};
  display: ${(props) => props.showHoleCart && "flex"};
  width: 198px;

  gap: 2rem;
  flex-shrink: 0;
  transition: display 2s ease;
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
  @media screen and (min-width: 768px) {
    width: 540px;
    transition: width 1s ease;
  }

  .cartItem {
    padding-top: 3rem;
    padding-bottom: 2rem;
    padding-right: 2rem;
    width: 263px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 768px) {
      /* width: 444px; */
    }
  }
  .contentSideBySide {
    height: 100%;
    @media screen and (min-width: 768px) {
      display: flex;
      border-radius: 8px;
    }
  }
  .grandTotalDiv {
    width: 263px;
    height: 92px;

    border-radius: 0px 0px 8px 8px;
    background: #000;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-left: 2rem;
    padding-top: 2rem;
    @media screen and (min-width: 768px) {
      width: 198px;
      margin-top: 0rem;
      height: 100%;
      border-radius: 0px 8px 8px 0px;
      padding-left: 3rem;
      padding-top: 4rem;
    }
    h3 {
      color: #fff;
      font-size: 15px;
      font-weight: 400;
      line-height: 25px;
      opacity: 0.5;
    }
    span {
      color: #fff;
      font-size: 18px;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
  .otherItemsLeft {
    align-self: center;
    color: #000;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: -0.214px;
    padding-block: 2rem;
    cursor: pointer;
  }
  .otherItemsLeft:hover {
    color: #d87d4a;
  }
  .itemsDiv {
    display: flex;
    flex-direction: column;

    padding-bottom: 2rem;
    padding-right: 2rem;
    width: 263px;
    border-radius: 8px;
    background: #f1f1f1;
    @media screen and (min-width: 768px) {
      border-radius: 8px 0px 0px 8px;
    }
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
    @media screen and (min-width: 768px) {
      width: 444px;
    }
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
    @media screen and (min-width: 768px) {
      width: 284px;
      margin-left: -16.5rem;
    }
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
    @media screen and (min-width: 768px) {
      width: 444px;
    }
  }
`;
