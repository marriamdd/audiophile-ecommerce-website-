import styled from "styled-components";

function Hero() {
  return (
    <HeroStyes>
      <picture>
        <source
          width={"540px"}
          height={"588px"}
          media="(min-width:1440px)"
          srcSet="/assets/shared/desktop/image-best-gear.jpg"
        />
        <source
          width={"689px"}
          height={"320px"}
          media="(min-width:768px)"
          srcSet="/assets/shared/tablet/image-best-gear.jpg"
        />

        <img
          width={"327px"}
          height={"250px"}
          src="/assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg"
        />
      </picture>
      <div className="context">
        <h2>
          Bringing you the <span>best</span> audio gear
        </h2>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </HeroStyes>
  );
}

export default Hero;

const HeroStyes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;
  margin-bottom: 10rem;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: start;
    /* width: 1110px; */
    height: 588px;
    gap: 10rem;
  }
  .context {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    margin-top: 2rem;
    @media screen and (min-width: 1440px) {
      margin-top: 10rem;
    }
  }
  picture {
    img {
      border-radius: 8px;
    }
    @media screen and (min-width: 1440px) {
      order: 2;
    }
  }
  h2 {
    width: 327px;
    color: #000;
    text-align: center;
    font-size: 28px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    @media screen and (min-width: 768px) {
      width: 573px;
      font-size: 40px;
      letter-spacing: 1.429px;
      line-height: 44px;
      margin-top: 2rem;
    }
    @media screen and (min-width: 1440px) {
      width: 445px;
      text-align: start;
    }
    span {
      color: #d87d4a;
    }
  }
  p {
    width: 327px;
    color: #000;
    text-align: center;
    opacity: 0.5;
    font-size: 15px;

    font-weight: 400;
    line-height: 25px;
    padding-bottom: 12rem;
    @media screen and (min-width: 768px) {
      width: 573px;
    }
    @media screen and (min-width: 1440px) {
      width: 445px;
      text-align: start;
    }
  }
`;
