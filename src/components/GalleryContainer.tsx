import styled from "styled-components";
import { IProduct } from "../types/Types";

export default function GalleryContainer({
  singleProductData,
}: {
  singleProductData: IProduct | undefined;
}) {
  return (
    <GalleryContainerStyles>
      <div>
        <picture className="picture1">
          <source
            media="(min-width:768px)"
            srcSet={singleProductData?.gallery.first.tablet}
          />
          <source
            media="(min-width:1440px)"
            srcSet={singleProductData?.gallery.first.desktop}
          />
          <img
            className="child"
            src={singleProductData?.gallery.first.mobile}
            alt=""
          />
        </picture>
        <picture className="picture2">
          <source
            media="(min-width:768px)"
            srcSet={singleProductData?.gallery.second.tablet}
          />
          <source
            media="(min-width:1440px)"
            srcSet={singleProductData?.gallery.second.desktop}
          />
          <img
            className="child"
            src={singleProductData?.gallery.second.mobile}
            alt=""
          />
        </picture>
      </div>

      <picture className="picture3">
        <source
          media="(min-width:768px)"
          srcSet={singleProductData?.gallery.third.tablet}
        />
        <source
          media="(min-width:1440px)"
          srcSet={singleProductData?.gallery.third.desktop}
        />
        <img
          className="child"
          src={singleProductData?.gallery.third.mobile}
          alt=""
        />
      </picture>
    </GalleryContainerStyles>
  );
}
const GalleryContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  .picture1,
  .picture2 {
    img {
      width: 327px;
      height: 174px;
      border-radius: 8px;
      @media screen and (min-width: 768px) {
        width: 277px;
        height: 174px;
      }
      @media screen and (min-width: 1440px) {
        width: 445px;
        height: 280px;
      }
    }
  }
  .picture3 {
    img {
      width: 327px;
      height: 368px;
      border-radius: 8px;
      @media screen and (min-width: 768px) {
        width: 395px;
        height: 368px;
      }
      @media screen and (min-width: 1440px) {
        width: 635px;
        height: 592px;
      }
    }
  }
`;
