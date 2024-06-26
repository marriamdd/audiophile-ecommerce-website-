import styled from "styled-components";
import SeeProductComponent from "./SeeProductComponent";

function YX1Earphones() {
  return (
    <YX1EarphonesStyles>
      <picture>
        <source
          width={"540px"}
          media="(min-width:1440px)"
          srcSet="/assets/home/desktop/image-earphones-yx1.jpg"
        />
        <source
          width={"339px"}
          height={"320px"}
          media="(min-width:768px)"
          srcSet="/assets/home/tablet/image-earphones-yx1.jpg"
        />

        <img
          width={"327px"}
          height={"200px"}
          src="assets/product-yx1-earphones/mobile/image-gallery-2.jpg"
        />
      </picture>
      <div className="context">
        <h2>YX1 EARPHONES</h2>
        <div className="SeeProductComponentStyle">
          <SeeProductComponent
            to={`/single/ZX7 Speaker`}
            backGround={"transparent"}
            color={"black"}
            border={"1px solid black"}
          />
        </div>
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
    width: 111rem;
    margin-top: 4rem;
    margin-bottom: 10rem;
    transition: margin-top 1s ease, margin-bottom 1s ease;
  }
  h2 {
    color: #000;

    font-size: 2.8rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    @media screen and (min-width: 1440px) {
      font-size: 4rem;
      line-height: 4.4rem;
      letter-spacing: 1.429px;
    }
  }
  picture {
    img {
      border-radius: 8px;
    }
  }

  .context {
    width: 32.7rem;
    height: 20rem;
    border-radius: 8px;
    background: #f1f1f1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    transition: gap 1s ease;
    @media screen and (min-width: 768px) {
      width: 33.9rem;
      height: 32rem;
    }
    @media screen and (min-width: 1440px) {
      width: 54rem;
      height: 32rem;
      align-items: start;
      padding-left: 7rem;
      gap: 5rem;
      transition: gap 1s ease, padding-left 1s ease;
    }
  }
`;
