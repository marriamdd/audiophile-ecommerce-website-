import React, { useContext } from "react";
import styled from "styled-components";
import { Audiophile_Context } from "../App";
import { useNavigate } from "react-router-dom";

export default function ThanksComponent() {
  const { thanksComponent, setThanksComponent } =
    useContext(Audiophile_Context);
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
  position: absolute;
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
  left: 2rem;
  position: absolute;
  z-index: 99999999;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding-block: 3rem;
  padding-right: 3rem;
  justify-content: center;
  border-radius: 8px;
  background: #fff;

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
    padding-left: 0rem;
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
