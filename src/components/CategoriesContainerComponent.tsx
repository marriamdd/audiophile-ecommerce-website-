import MobileCategoriesComponent from "./MobileCategoriesComponent";
import styled from "styled-components";
import HeadPhoneMenu from "../assets/headPhoneMenu.png";
import Audiophile from "../assets/audiophile-ecommerce-website.png";
import Speakers_menu from "../assets/speakers_menu.png";
export default function CategoriesContainerComponent({
  position,
  zindex,
}: {
  zindex: number;
  position: string;
}) {
  return (
    <CategoriesContainer position={position} zindex={zindex}>
      <MobileCategoriesComponent
        title={"HeadPhones"}
        link={"/HeadPhones"}
        img={HeadPhoneMenu}
        height={"104px"}
        width={"79.916px"}
      />
      <MobileCategoriesComponent
        title={"Speakers"}
        link={"/Speakers"}
        img={Audiophile}
        height={"101px"}
        width={"84.044px"}
      />
      <MobileCategoriesComponent
        title={"EarPhones"}
        link={"/EarPhones"}
        img={Speakers_menu}
        height={"133px"}
        width={"147px"}
      />
    </CategoriesContainer>
  );
}

const CategoriesContainer = styled.div<{ position: string; zindex: number }>`
  position: ${(props) =>
    props.position == "absolute" ? "absolute" : "static"};
  z-index: ${(props) => props.zindex && props.zindex};
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
    gap: 2rem;
    height: 34rem;
    flex-direction: row;
    padding-top: 0rem;
    justify-content: center;
    transition: justify-content 1s ease, gap 1s ease;
    padding-top: 5rem;
  }
  @media screen and (min-width: 900px) {
    gap: 8rem;
    transition: gap 1s ease;
  }
`;
