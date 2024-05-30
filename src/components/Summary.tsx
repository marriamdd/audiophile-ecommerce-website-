import { useContext } from "react";
import styled from "styled-components";
import { Audiophile_Context } from "../App";

export default function Summary() {
  const { cartItems } = useContext(Audiophile_Context);
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
  const vat = (totalPrice: number) => {
    return totalPrice * 0.18;
  };
  const grandTotal = (total: number, vat: number) => {
    return total + vat + 50;
  };
  return (
    <SummaryStyles>
      {cartItems.map((item) => (
        <div key={Math.random() * Math.random()} className="cartItem">
          <img src={item.img} alt="" />
          <div className="price_name">
            <h3>{item.name}</h3>
            <span>{formatPrice(item.price)}</span>
          </div>

          <span className="quantity">{`x${item.quantity}`}</span>
        </div>
      ))}
      <div className="pricesContainer">
        <div>
          <h3>TOTAL</h3>
          <span>{formatPrice(totalPrice())}</span>
        </div>
        <div>
          <h3>SIPPING</h3>
          <span>$50</span>
        </div>
        <div>
          <h3>VAT (INCLUDED)</h3>
          <span>{formatPrice(vat(totalPrice()))}</span>
        </div>
        <div>
          <h3>GRAND TOTAL</h3>
          <span>
            {formatPrice(grandTotal(totalPrice(), vat(totalPrice())))}
          </span>
        </div>
      </div>
      <Continue_pay type="submit" value={"CONTINUE & PAY"} />
    </SummaryStyles>
  );
}
const SummaryStyles = styled.div`
  padding-inline: 1rem;
  padding-block: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  border-radius: 8px;
  background: #fff;
  .cartItem {
  }
  .pricesContainer {
    width: 279px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 3rem 1rem 2rem;
    @media screen and (min-width: 768px) {
      width: 623px;
    }
    div {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    h3 {
      color: #000;
      font-family: Manrope;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 25px; /* 166.667% */
    }
    span {
      color: #000;
      text-align: right;
      font-size: 18px;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
  div {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
  div {
    img {
      border-radius: 8px;
      width: 64px;
      height: 64px;
    }
  }
  .quantity {
    border: none;
    color: #000;
    text-align: right;
    font-size: 15px;
    font-weight: 700;
    line-height: 25px;
    opacity: 0.5;
  }
  .price_name {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;
const Continue_pay = styled.input`
  margin-top: 2rem;
  width: 279px;
  height: 48px;
  background: #d87d4a;
  color: #fff;
  text-align: center;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  border: none;
`;
