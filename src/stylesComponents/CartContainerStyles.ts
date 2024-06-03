import styled from "styled-components";

export const CartIContainer = styled.div`
  display: flex;
  width: 327px;
  right: 2rem;

  top: 9rem;

  border-radius: 8px;
  flex-direction: column;
  z-index: 9999999999;
  position: absolute;
  gap: 3rem;
  background: #fff;
  justify-content: center;
  align-items: center;
  padding-bottom: 3rem;
  @media screen and (min-width: 768px) {
    width: 377px;
  }
  @media screen and (min-width: 1440px) {
    right: 5rem;
  }

  .cartHeader {
    display: flex;

    width: 271px;

    justify-content: space-between;

    margin-top: 4rem;
    @media screen and (min-width: 768px) {
      width: 313px;
    }
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
      cursor: pointer;
    }
  }
  .cartItem {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 295px;
    @media screen and (min-width: 768px) {
      width: 313px;
      gap: 2rem;
    }
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
    cursor: pointer;
  }
  .plus {
    cursor: pointer;
    position: absolute;

    right: 0rem;
    width: 40px;
    text-align: center;
  }
  .plus:hover {
    color: #d87d4a;
    opacity: 1;
  }
  .minus:hover {
    color: #d87d4a;
    opacity: 1;
  }
  .total {
    display: flex;
    width: 313px;
    padding-inline: 1rem;
    justify-content: space-between;
    h3 {
      color: #000;
      font-size: 15px;
      opacity: 0.5;
      font-weight: 400;
      line-height: 25px;
    }
    span {
      opacity: 1;
      color: #000;
      text-align: center;
      font-size: 18px;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
  a {
    cursor: pointer;
    width: 313px;
    height: 48px;
    background: #d87d4a;
    text-decoration: none;
    text-align: center;
    border: none;
    color: #fff;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1px;
    padding-top: 1.5rem;
  }
  a:hover {
    background: #fbaf85;
  }
`;
