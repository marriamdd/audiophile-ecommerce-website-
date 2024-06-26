import styled from "styled-components";
import SeeProductComponent from "./SeeProductComponent";

function ZX7SpeakerCart() {
  return (
    <ZX7SpeakerCartStyles>
      <h2>ZX7 SPEAKER</h2>
      <picture>
        <source
          width={"1110px"}
          height={"320px"}
          media="(min-width:1440px)"
          srcSet="/assets/home/desktop/image-speaker-zx7.jpg"
        />
        <source
          width={"689px"}
          height={"320px"}
          media="(min-width:768px)"
          srcSet="/assets/home/tablet/image-speaker-zx7.jpg"
        />

        <img
          width={"327px"}
          height={"352px"}
          src="/assets/home/mobile/image-speaker-zx7.jpg"
          alt="image-speaker-zx7"
        />
      </picture>
      <div className="SeeProductComponentDiv">
        <SeeProductComponent
          to={`/single/ZX7 Speaker`}
          backGround={"transparent"}
          color={"black"}
          border={"1px solid black"}
        />
      </div>
    </ZX7SpeakerCartStyles>
  );
}

export default ZX7SpeakerCart;
const ZX7SpeakerCartStyles = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    position: absolute;
    top: 12rem;
    left: 3rem;
    color: #000;
    font-size: 28px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    @media screen and (min-width: 1440px) {
      left: 15rem;
      transition: top 1s ease, left 1s ease;
    }
  }
  picture {
    img {
      border-radius: 8px;
    }
  }
  .SeeProductComponentDiv {
    position: absolute;
    top: 18rem;
    left: 3rem;
    @media screen and (min-width: 1440px) {
      left: 15rem;
      transition: left 1s ease;
    }
  }
`;
