import React, { useContext } from "react";
import { Audiophile_Context } from "../App";
import styled from "styled-components";
import EmptyCart from "./EmptyCart";

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
    <>
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
    </>
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
  bottom: 2rem;
  left: 0;
  right: 0;
`;
const CartIContainer = styled.div`
  display: flex;
  width: 327px;
  top: 10rem;

  position: absolute;
  border-radius: 8px;
  flex-direction: column;
  z-index: 9999999999;
  position: absolute;
  gap: 3rem;
  background: #fff;
  justify-content: center;
  align-items: center;
  padding-bottom: 3rem;
  .cartHeader {
    display: flex;
    width: 271px;
    justify-content: space-between;
    padding-inline: 1rem;
    margin-top: 4rem;
    & > h2 {
      color: #000;
      font-size: 18px;
      font-weight: 700;
      letter-spacing: 1.286px;
    }
    & > span {
      color: #000;
      font-size: 15px;
      opacity: 0.5;
      font-weight: 400;
      line-height: 25px;
      text-decoration-line: underline;
    }
  }
  .cartItem {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 271px;
    img {
      width: 64px;
      height: 64px;
      border-radius: 8px;
    }
    .price_name_div {
      display: flex;
      flex-direction: column;
      h3 {
        color: #000;
        font-size: 15px;
        font-weight: 700;
        line-height: 25px;
      }
      span {
        color: #000;

        font-size: 14px;
        opacity: 0.5;
        font-weight: 700;
        line-height: 25px;
      }
    }
  }

  .countContainer {
    position: relative;
    display: flex;
    align-items: center;
  }
  .countContainer input {
    border: none;
    width: 96px;
    height: 32px;
    background: #f1f1f1;
    text-align: center;
  }
  span {
    color: #000;
    font-size: 13px;
    opacity: 0.25;
    font-weight: 700;
  }
  .minus {
    position: absolute;
    left: 0rem;
    text-align: center;
    width: 40px;
  }
  .plus {
    position: absolute;

    right: 0rem;
    width: 40px;
    text-align: center;
  }
`;
