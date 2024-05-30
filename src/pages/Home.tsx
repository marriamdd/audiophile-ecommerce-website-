import { useContext } from "react";
import HomeHeaderComponent from "../components/HomeHeaderComponent";
import { Audiophile_Context } from "../App";
import CartContent from "../components/CartContent";
import CategoriesContainerComponent from "../components/CategoriesContainerComponent";
import ZX9SpeakerCart from "../components/ZX9SpeakerCart";
import styled from "styled-components";
import ZX7SpeakerCart from "../components/ZX7SpeakerCart";
import YX1Earphones from "../components/YX1Earphones";
import Hero from "../components/Hero";

function Home() {
  const { showCart } = useContext(Audiophile_Context);
  return (
    <Main>
      {showCart && <CartContent />}
      <HomeHeaderComponent />
      <CategoriesContainerComponent position={"static"} zindex={0} />
      <ZX9SpeakerCart />
      <ZX7SpeakerCart />
      <YX1Earphones />
      <Hero />
    </Main>
  );
}

export default Home;
const Main = styled.main`
  display: flex;
  flex-direction: column;

  align-items: center;
`;
