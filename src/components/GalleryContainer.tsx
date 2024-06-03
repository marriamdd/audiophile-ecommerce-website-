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
        <picture>
          <source
            width="445px"
            height="280px"
            media="(min-width:1440px)"
            srcSet={singleProductData?.gallery.first.desktop}
          />
          <source
            width="277px"
            height="174px"
            media="(min-width:768px)"
            srcSet={singleProductData?.gallery.first.tablet}
          />

          <img
            width="327px"
            height="174px"
            className="child"
            src={singleProductData?.gallery.first.mobile}
            alt=""
          />
        </picture>
        <picture>
          <source
            width="445px"
            height="280px"
            media="(min-width:1440px)"
            srcSet={singleProductData?.gallery.second.desktop}
          />
          <source
            width="277px"
            height="174px"
            media="(min-width:768px)"
            srcSet={singleProductData?.gallery.second.tablet}
          />

          <img
            width=" 327px"
            height="174px"
            className="child"
            src={singleProductData?.gallery.second.mobile}
            alt="product"
          />
        </picture>
      </div>

      <picture>
        <source
          width="635px"
          height="592px"
          media="(min-width:1440px)"
          srcSet={singleProductData?.gallery.third.desktop}
        />

        <source
          width="395px"
          height="368px"
          media="(min-width:768px)"
          srcSet={singleProductData?.gallery.third.tablet}
        />

        <img
          width="327px"
          height="368px"
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
  picture {
    img {
      border-radius: 8px;
    }
  }
`;
