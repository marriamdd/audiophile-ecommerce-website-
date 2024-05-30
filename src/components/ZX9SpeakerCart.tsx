import styled from "styled-components";
import SeeProductComponent from "./SeeProductComponent";

function ZX9SpeakerCart() {
  return (
    <ZX9SpeakerCartContainer>
      <picture>
        <img src="/assets/home/tablet/image-speaker-zx9.png" alt="" />
      </picture>
      <h2>ZX9 SPEAKER</h2>
      <p>
        Upgrade to premium speakers that are phenomenally built to deliver truly
        remarkable sound.
      </p>
      <SeeProductComponent
        to={`/single/ZX9 Speaker`}
        backGround={"black"}
        color={"white"}
        border={"none"}
      />
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
  height: 600px;
  border-radius: 8px;
  background: #d87d4a;
  margin-bottom: 5rem;
  picture {
    img {
      width: 172.248px;
      height: 207px;
      @media screen and (min-width: 768px) {
        width: 197.212px;
        height: 237px;
      }
      @media screen and (min-width: 1440px) {
        width: 410.234px;
        height: 493px;
      }
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
  }

  p {
    color: #fff;
    text-align: center;
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
  }
`;
