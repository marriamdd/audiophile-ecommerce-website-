import styled from "styled-components";
// import SeeProductComponent from "./SeeProductComponent";

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
        {/* <SeeProductComponent backGround={"#D87D4A"} /> */}
      </div>
    </HomeHeader>
  );
}
const HomeHeader = styled.div`
  background-image: url(assets/home/mobile/image-header.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 60rem;
  display: flex;

  align-items: center;
  justify-content: center;

  & > div {
    width: 32.8rem;
    height: 29rem;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      color: #fff;
      text-align: center;
      font-size: 3.6rem;
      font-weight: 700;
      line-height: 4rem;
      letter-spacing: 1.286px;
      text-transform: uppercase;
      margin-bottom: 2.4rem;
    }
    p {
      color: #fff;
      text-align: center;
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 2.5rem;
      margin-bottom: 2.8rem;
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
