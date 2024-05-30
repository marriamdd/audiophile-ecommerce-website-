import MobileCategoriesComponent from "./MobileCategoriesComponent";
import styled from "styled-components";

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
  }
  @media screen and (min-width: 900px) {
    gap: 8rem;
    transition: gap 1s ease;
  }
`;
