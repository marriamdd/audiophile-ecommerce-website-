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

        <img
          width="172.248px"
          height="207px"
          src="/assets/home/mobile/image-speaker-zx9.png"
          alt=""
        />
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
  background-position: top -130px right -130px;
  background-size: cover;
  border-radius: 8px;
  background-color: #d87d4a;
  margin-bottom: 5rem;
  @media screen and (min-width: 768px) {
    height: 72rem;
    width: 68.9rem;

    background-position: top -180px right -30px;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    width: 111rem;
    height: 56rem;
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
    width: 28rem;
    font-size: 3.6rem;
    font-weight: 700;
    line-height: 4rem;
    letter-spacing: 1.286px;
    text-transform: uppercase;
    @media screen and (min-width: 768px) {
      font-size: 5.6rem;
      line-height: 5.8rem;
      letter-spacing: 2px;
    }
    @media screen and (min-width: 1440px) {
      text-align: start;
      width: 34.9rem;
    }
  }

  p {
    color: #fff;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2.5rem;
    @media screen and (min-width: 768px) {
      width: 34.9rem;
    }
    @media screen and (min-width: 1440px) {
      text-align: start;
    }
  }
`;
