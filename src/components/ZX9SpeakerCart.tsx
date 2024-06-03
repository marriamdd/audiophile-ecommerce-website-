import styled from "styled-components";
import SeeProductComponent from "./SeeProductComponent";

function ZX9SpeakerCart() {
  return (
    <ZX9SpeakerCartContainer>
      <div className="circles_img_container">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <picture>
          <source
            media="(min-width:768px)"
            srcSet="/assets/home/tablet/image-speaker-zx9.png"
          />
          <source
            media="(min-width:1140px)"
            srcSet="/assets/home/desktop/image-speaker-zx9.png"
          />
          <img src="/assets/home/mobile/image-speaker-zx9.png" alt="" />
        </picture>
      </div>

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
  /* height: 600px; */
  border-radius: 8px;
  background: #d87d4a;
  margin-bottom: 5rem;
  @media screen and (min-width: 768px) {
    height: 720px;
    width: 689px;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    width: 1110px;
    height: 560px;
  }
  picture {
    img {
      margin-top: 6rem;
      width: 165px;
      height: 203px;
      @media screen and (min-width: 768px) {
        width: 197.212px;
        height: 237px;
      }
      @media screen and (min-width: 1440px) {
        width: 410.234px;
        height: 493px;
        margin-top: 9.3rem;
        margin-inline: 13rem;
      }
    }
  }
  .circles_img_container {
    position: relative;
    @media screen and (min-width: 1440px) {
      width: 700px;
    }
    .circle1 {
      position: absolute;
      width: 279px;
      height: 279px;
      border-radius: 279px;
      border: 1px solid #fff;
      opacity: 0.2;
      top: 2.1rem;
      left: -6rem;
      @media screen and (min-width: 768px) {
        width: 472px;
        height: 472px;
        top: -3rem;
        left: -13rem;
      }
      @media screen and (min-width: 1440px) {
        display: none;
      }
    }
  }
  .circle2 {
    position: absolute;
    width: 320px;
    height: 320px;
    border-radius: 279px;
    border: 1px solid #fff;
    opacity: 0.2;
    top: 0rem;
    left: -8rem;
    @media screen and (min-width: 768px) {
      width: 542px;
      height: 542px;
      top: -6rem;
      right: -6rem;
      left: -17rem;
    }
    @media screen and (min-width: 1440px) {
      display: none;
    }
  }
  .circle3 {
    display: none;
    @media screen and (min-width: 768px) {
      display: flex;
      position: absolute;
      /* width: 944px; */
      /* height: 944px; */ //ჰეითს როცა ვაბრუნებ ზემოთ ფარავს რახან აბსოლიტია დავუყოო
      border-radius: 944px;
      border: 1px solid #fff;
      opacity: 0.2;
      top: -26rem;
      left: -39rem;
    }
  }
  .content {
    /* margin-top: 35rem; */
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
