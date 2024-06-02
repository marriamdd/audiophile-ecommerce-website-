import styled from "styled-components";
import SeeProductComponent from "./SeeProductComponent";

export default function HomeHeaderComponent() {
  return (
    <HomeHeader>
      <div>
        {" "}
        <h3 className="title">NEW PRODUCT</h3>
        <h1>XX99 Mark II HeadphoneS</h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <SeeProductComponent
          to={`/single/XX99%20Mark%20II%20Headphones`}
          backGround={"#D87D4A"}
          color={"white"}
          border={"none"}
        />
      </div>
    </HomeHeader>
  );
}
const HomeHeader = styled.div`
  background-image: url(assets/home/mobile/image-header.jpg);
  background-position: 0px -80px;
  background-repeat: no-repeat;
  background-size: cover;
  height: 60rem;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    background-image: url(/assets/home/tablet/image-header.jpg);
    width: 100%;
    background-position: 0px -110px;
    transition: background-position 1s;
    margin-bottom: 4rem;
  }

  @media screen and (min-width: 1440px) {
    justify-content: start;
    padding-left: 12rem;
    background-image: url(/assets/home/desktop/image-hero.jpg);
  }
  & > div {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (min-width: 768px) {
      width: 379px;
      height: 346px;
    }
    @media screen and (min-width: 1440px) {
      width: 398px;
      height: 346px;
      align-items: flex-start;
    }
    h1 {
      width: 328px;
      color: #fff;
      text-align: center;
      font-size: 3.6rem;
      font-weight: 700;
      line-height: 4rem;
      letter-spacing: 1.286px;
      text-transform: uppercase;
      margin-bottom: 2.4rem;
      @media screen and (min-width: 768px) {
        font-size: 56px;
        line-height: 58px;
        letter-spacing: 2px;
        width: 396px;
      }
    }
    p {
      width: 328px;
      color: #fff;
      text-align: center;
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 2.5rem;
      margin-bottom: 2.8rem;
      opacity: 0.75;
      margin-bottom: 4rem;
      @media screen and (min-width: 768px) {
        width: 396px;
      }
      @media screen and (min-width: 1440px) {
        text-align: start;
      }
    }
  }
  & > div .title {
    color: #fff;
    text-align: center;
    font-family: Manrope;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1rem;
    text-transform: uppercase;
    margin-bottom: 1.6rem;
    opacity: 0.4964;
  }
`;
