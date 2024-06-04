import { useContext } from "react";
import styled from "styled-components";
import { Audiophile_Context } from "../App";
import { useCartFunctions } from "../hooks/useCartsFunctions";

export default function Summary() {
  const { cartItems } = useContext(Audiophile_Context);

  const { formatPrice, totalPrice, vat, grandTotal } = useCartFunctions();
  return (
    <SummaryStyles>
      <h2>summary</h2>
      {cartItems.map((item) => (
        <CartItemsStyles
          key={Math.random() * Math.random()}
          className="cartItem"
        >
          <img src={item.img} alt="" />
          <div className="price_name">
            <h3>{item.name}</h3>
            <span className="itemPrice">{formatPrice(item.price)}</span>
          </div>

          <span className="quantity">{`x${item.quantity}`}</span>
        </CartItemsStyles>
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
          <span style={{ color: "#D87D4A" }}>
            {formatPrice(grandTotal(totalPrice(), vat(totalPrice())))}
          </span>
        </div>
      </div>
      <Continue_pay type="submit" value={"CONTINUE & PAY"} />
    </SummaryStyles>
  );
}
export const CartItemsStyles = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-bottom: 1rem;
  width: 25.6rem;
  @media screen and (min-width: 768px) {
    width: 62.3rem;
  }
  @media screen and (min-width: 1440px) {
    width: 33rem;
  }
  .price_name {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
  }
  .quantity {
    border: none;
    color: #000;
    text-align: right;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2.5rem;
    opacity: 0.5;
    margin-left: auto;
    align-self: center;
  }
  img {
    border-radius: 8px;
    width: 6.4rem;
    height: 6.4rem;
  }
  span {
    color: #000;
    text-align: right;
    font-size: 1.8rem;
    font-weight: 700;
    text-transform: uppercase;
  }
  .itemPrice {
    color: #000;
    font-size: 1.4rem;
    opacity: 0.5;
    font-weight: 700;
    line-height: 25px; /* 178.571% */
  }
`;

const SummaryStyles = styled.div`
  padding-inline: 1rem;
  padding-block: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 330px;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 5rem;
  padding-bottom: 5rem;
  height: 100%;
  @media screen and (min-width: 768px) {
    width: 689px;
  }
  @media screen and (min-width: 1440px) {
    width: 38rem;
    margin-top: 2rem;

    flex-shrink: 0;
  }

  h2 {
    align-self: flex-start;
    padding-left: 3rem;
    padding-bottom: 3rem;
    padding-top: 1rem;
  }

  .pricesContainer {
    width: 27.9rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 3rem 1rem 2rem;
    gap: 1rem;
    @media screen and (min-width: 768px) {
      width: 62.3rem;
    }
    @media screen and (min-width: 1440px) {
      width: 35rem;
    }
    div {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    h3 {
      color: #000;
      opacity: 0.5;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 400;
      line-height: 2.5rem;
    }
    span {
      color: #000;
      text-align: right;
      font-size: 1.7rem;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
`;
const Continue_pay = styled.input`
  margin-top: 2rem;
  width: 27.9rem;
  height: 4.8rem;
  background: #d87d4a;
  color: #fff;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 1px;
  border: none;
  cursor: pointer;
  &:hover {
    background: #fbaf85;
  }
`;
