import styled from "styled-components";
import SeeProductComponent from "./SeeProductComponent";

function ZX9SpeakerCart() {
  return (
    <ZX9SpeakerCartContainer>
      <picture>
        <source
          width="410px"
          height="493px"
          media="(min-width:1440px)"
          srcSet="/assets/home/tablet/image-speaker-zx9.png"
        />
        <source
          width="197.212px"
          height="237px"
          media="(min-width:768px)"
          srcSet="/assets/home/tablet/image-speaker-zx9.png"
        />

        <img src="/assets/home/mobile/image-speaker-zx9.png" alt="" />
      </picture>

      <div className="content">
        <h2>ZX9 SPEAKER</h2>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <SeeProductComponent
          to={`/single/ZX9 Speaker`}
          backGround={"black"}
          color={"white"}
          border={"none"}
        />
      </div>
    </ZX9SpeakerCartContainer>
  );
}

export default ZX9SpeakerCart;
const ZX9SpeakerCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.6rem;
  width: 90%;

  background-image: url("/assets/home/desktop/pattern-circles.svg");
  background-repeat: no-repeat;
  background-position: top -130px right -110px;
  background-size: cover;
  border-radius: 8px;
  background-color: #d87d4a;
  margin-bottom: 5rem;
  @media screen and (min-width: 768px) {
    height: 720px;
    width: 689px;

    background-position: top -180px right -30px;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    width: 1110px;
    height: 560px;
    background-position: top -180px right 240px;
  }
  picture {
    img {
      margin-top: 6rem;

      @media screen and (min-width: 1440px) {
        margin-top: 8.7rem;
        margin-inline: 13rem;
      }
    }
  }

  .content {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    @media screen and (min-width: 1440px) {
      align-items: start;

      gap: 4rem;
    }
  }
  h2 {
    color: #fff;
    text-align: center;
    width: 280px;
    font-size: 36px;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 1.286px;
    text-transform: uppercase;
    @media screen and (min-width: 768px) {
      font-size: 56px;
      line-height: 58px;
      letter-spacing: 2px;
    }
    @media screen and (min-width: 1440px) {
      text-align: start;
      width: 349px;
    }
  }

  p {
    color: #fff;
    text-align: center;
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
    @media screen and (min-width: 768px) {
      width: 349px;
    }
    @media screen and (min-width: 1440px) {
      text-align: start;
    }
  }
`;
