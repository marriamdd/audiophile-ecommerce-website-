import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Audiophile_Context } from "../App";

export default function Footer() {
  const { setShowCart } = useContext(Audiophile_Context);
  return (
    <FooterStyled
      onClick={(e) => {
        const clickedElement = e.target as HTMLElement;
        if (!clickedElement.closest(".cartComponent")) {
          setShowCart(false);
        }
      }}
    >
      <Link to={"/"}>
        <img src="/assets/shared/desktop/logo.svg" />
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/HeadPhones">HeadPhones</Link>
        <Link to="/Speakers">Speakers</Link>
        <Link to="/EarPhones">EarPhones</Link>
      </nav>
      <p>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>

      <div className="nav_copyright_container">
        <p>Copyright 2021. All Rights Reserved</p>
        <div>
          <span>
            <img src="/assets/shared/desktop/icon-facebook.svg" alt="" />
          </span>
          <span>
            <img src="/assets/shared/desktop/icon-twitter.svg" alt="" />
          </span>
          <span>
            <img src="/assets/shared/desktop/icon-instagram.svg" alt="" />
          </span>
        </div>
      </div>
    </FooterStyled>
  );
}
const FooterStyled = styled.footer`
  height: 654px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4.8rem;
  background: #101010;
  @media screen and (min-width: 678px) {
    align-items: flex-start;
    padding-left: 3rem;
  }
  h2 {
    color: white;
    font-weight: bold;
    cursor: pointer;
    font-size: 28px;
  }
  p {
    color: #fff;
    text-align: center;
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
    opacity: 0.5;
    padding-inline: 1rem;
    text-align: start;
  }
  nav {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    color: #fff;
    font-size: 13px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 2px;
    text-transform: uppercase;
    @media screen and (min-width: 768px) {
      flex-direction: row;
    }
  }
  a {
    cursor: pointer;
    text-decoration: none;
    color: white;
  }
  div {
    display: flex;
    gap: 2rem;
    @media screen and (min-width: 768px) {
      padding-inline: 1rem;
    }
  }
  .nav_copyright_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    @media screen and (min-width: 768px) {
      flex-direction: row;
      width: 100%;
      justify-content: space-between;
    }
  }
`;
