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
      <div className="audio_nav">
        <Link to={"/"}>
          <img src="/assets/shared/desktop/logo.svg" />
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/HeadPhones">HeadPhones</Link>
          <Link to="/Speakers">Speakers</Link>
          <Link to="/EarPhones">EarPhones</Link>
        </nav>
      </div>
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
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4.8rem;
  background: #101010;
  padding-inline: 2rem;
  padding-block: 2rem;
  @media screen and (min-width: 678px) {
    align-items: flex-start;
    height: 365px;
    padding-left: 3rem;
  }
  @media screen and (min-width: 1440px) {
    padding-inline: 25rem;
    height: 365px;
  }
  h2 {
    color: white;
    font-weight: bold;
    cursor: pointer;
    font-size: 28px;
  }
  .audio_nav {
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 1440px) {
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
    }
  }
  p {
    color: #fff;
    text-align: center;
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
    opacity: 0.5;

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
    a {
      cursor: pointer;
      text-decoration: none;
      color: white;
    }
    a:hover {
      color: #d87d4a;
    }
    @media screen and (min-width: 668px) {
      flex-direction: row;
    }
    @media screen and (min-width: 1440px) {
    }
  }

  div {
    display: flex;
    gap: 2rem;
    @media screen and (min-width: 668px) {
    }
  }
  .nav_copyright_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    span:hover {
      fill: #d87d4a;
      cursor: pointer;
    }
    @media screen and (min-width: 668px) {
      flex-direction: row;
      width: 100%;
      justify-content: space-between;
    }
  }
`;
