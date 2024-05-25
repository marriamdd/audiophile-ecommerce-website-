import { Link } from "react-router-dom";
import styled from "styled-components";
import MobileCategoriesComponent from "./MobileCategoriesComponent";
import { useContext, useEffect, useState } from "react";
import { Audiophile_Context } from "../App";
function Header() {
  const { menuButton, setMenuButton } = useContext(Audiophile_Context);

  const UseDesktopFunc = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1440);

    useEffect(() => {
      const handleResize = () => {
        setIsDesktop(window.innerWidth >= 1440);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [isDesktop]);

    return isDesktop;
  };

  const UseDesktop = UseDesktopFunc();
  if (UseDesktop) {
    setMenuButton(false);
  }
  return (
    <>
      <StyledHeader>
        <img
          className="menuButton"
          onClick={() => setMenuButton(!menuButton)}
          src="assets/product-zx9-speaker/mobile/Group (1).svg"
          alt="Navigation Menu"
        />
        <h2>
          {" "}
          <Link to={"/"}>audioPhile</Link>
        </h2>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/HeadPhones">HeadPhones</Link>
          <Link to="/Speakers">Speakers</Link>
          <Link to="/EarPhones">EarPhones</Link>
        </nav>
        <img
          className="cart_icon"
          src="/assets/shared/desktop/icon-cart.svg"
          alt="cart_icon"
        />
      </StyledHeader>

      {menuButton && (
        <>
          <div
            onClick={() => setMenuButton(false)}
            style={{
              opacity: "0.4",
              background: "#000",
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          ></div>
          <div onClick={() => setMenuButton(false)}>
            <CategoriesContainer>
              <MobileCategoriesComponent
                title={"HeadPhones"}
                link={"/HeadPhones"}
                img={"assets/menu_Imgs/headPhoneMenu.png"}
                height={"104px"}
                width={"79.916px"}
              />
              <MobileCategoriesComponent
                title={"Speakers"}
                link={"/Speakers"}
                img={"assets/menu_Imgs/audiophile-ecommerce-website.png"}
                height={"101px"}
                width={"84.044px"}
              />
              <MobileCategoriesComponent
                title={"EarPhones"}
                link={"/EarPhones"}
                img={"assets/menu_Imgs/speakers_menu.png"}
                height={"133px"}
                width={"147px"}
              />
            </CategoriesContainer>
          </div>
        </>
      )}
    </>
  );
}

export default Header;

const StyledHeader = styled.header`
  padding-inline: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #000;
  height: 9rem;
  justify-content: space-between;
  transition: justify-content 1s ease;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.2);
  @media screen and (min-width: 1440px) {
    justify-content: space-around;
    transition: justify-content 1s ease;
  }
  & > img {
    width: 16px;
    height: 15px;
  }
  & > h2 {
    color: white;
    font-weight: bold;
    cursor: pointer;
    @media screen and (min-width: 768px) {
      margin-right: auto;
      padding-left: 4.2rem;
      transition: margin-right 1s ease, padding-left 1s ease;
    }
    @media screen and (min-width: 1440px) {
      margin-right: 0px;
      padding-left: 0px;
      transition: margin-right 1s ease, padding-left 1s ease;
    }
  }
  .menuButton {
    display: flex;
    @media screen and (min-width: 1440px) {
      display: none;
    }
  }
  nav {
    display: none;
    justify-content: space-between;
    align-items: center;
    gap: 3.4rem;
    color: #fff;
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 2.5rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    @media screen and (min-width: 1440px) {
      display: flex;
    }
  }
  a {
    cursor: pointer;
    text-decoration: none;
    color: white;
  }
  a:hover {
    color: #d87d4a;
  }
  .cart_icon {
    cursor: pointer;
  }
  .bottom_line {
    width: 100%;
    height: 1px;
    opacity: 0.104;
    background: #fff;
  }
`;

const CategoriesContainer = styled.div`
  position: absolute;
  width: 100%;
  padding-top: 8rem;
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  gap: 6.8rem;
  background-color: white;
  transition: gap 1s ease;
  padding-bottom: 5rem;
  @media screen and (min-width: 768px) {
    gap: 4.5rem;
    height: 34rem;
    flex-direction: row;
    padding-top: 0rem;
    justify-content: center;
    transition: justify-content 1s ease, gap 1s ease;
  }
  @media screen and (min-width: 900px) {
    gap: 8rem;
    transition: gap 1s ease;
  }
`;
