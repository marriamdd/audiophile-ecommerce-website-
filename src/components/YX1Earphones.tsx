import styled from "styled-components";
import SeeProductComponent from "./SeeProductComponent";

function YX1Earphones() {
  return (
    <YX1EarphonesStyles>
      <picture>
        <source
          media="(min-width:768px)"
          srcSet="/assets/home/tablet/image-earphones-yx1.jpg"
        />
        <source
          media="(min-width:1440px)"
          srcSet="/assets/home/desktop/image-earphones-yx1.jpg"
        />
        <img src="assets/product-yx1-earphones/mobile/image-gallery-2.jpg" />
      </picture>
      <div className="context">
        <h2>YX1 EARPHONES</h2>
        <SeeProductComponent
          to={`/single/ZX7 SPEAKER`}
          backGround={"transparent"}
          color={"black"}
          border={"1px solid black"}
        />
      </div>
    </YX1EarphonesStyles>
  );
}

export default YX1Earphones;
const YX1EarphonesStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-block: 3rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1440px) {
    width: 1110px;
  }
  h2 {
    color: #000;

    font-size: 28px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    @media screen and (min-width: 1440px) {
      font-size: 4rem;
      line-height: 44px;
      letter-spacing: 1.429px;
    }
  }
  picture {
    img {
      width: 327px;
      height: 200px;
      border-radius: 8px;
      @media screen and (min-width: 768px) {
        width: 339px;
        height: 320px;
      }
      @media screen and (min-width: 1440px) {
        width: 540px;

        border-radius: 8px;
      }
    }
  }

  .context {
    width: 327px;
    height: 200px;
    border-radius: 8px;
    background: #f1f1f1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;

    @media screen and (min-width: 768px) {
      width: 339px;
      height: 320px;
    }
    @media screen and (min-width: 1440px) {
      width: 540px;
      height: 320px;
      align-items: start;
    }
  }
`;
