import { IProduct } from "../types/Types";
import styled from "styled-components";

export default function YouMayAlsoLike({
  singleProductData,
}: {
  singleProductData: IProduct | undefined;
}) {
  return (
    <MayAlsoLikeContainer>
      {" "}
      <h2>YOU MAY ALSO LIKE</h2>
      <div className="mayAlsoLikeItemsDiv">
        {singleProductData?.others.map((item) => (
          <div key={Math.random()} className="mayAlsoLikeItem">
            <div className="imgDiv">
              <picture>
                <source
                  width={"350px"}
                  height={"318px"}
                  media="(min-width:1440px)"
                  srcSet={item.image.desktop}
                />
                <source
                  width={"230.124px"}
                  height={"318px"}
                  media="(min-width:789px)"
                  srcSet={item.image.desktop}
                />

                <img
                  width={"327px"}
                  height={"120px"}
                  src={item.image.mobile}
                  alt=""
                />
              </picture>
            </div>
            <h2>{item.name}</h2>
            <button>See Product</button>
          </div>
        ))}
      </div>
    </MayAlsoLikeContainer>
  );
}

const MayAlsoLikeContainer = styled.div`
  margin-block: 3rem;
  @media screen and (min-width: 1440px) {
    margin-block: 14rem;
  }
  h2 {
    color: #000;
    text-align: center;
    font-family: Manrope;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0.857px;
    text-transform: uppercase;
    margin-bottom: 4rem;
    @media screen and (min-width: 768px) {
      font-size: 32px;
      letter-spacing: 1.143px;
    }
  }
  .mayAlsoLikeItem {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
  .mayAlsoLikeItemsDiv {
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 768px) {
      flex-direction: row;

      gap: 2rem;
    }
  }
  .imgDiv {
    picture {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-block: 2rem;
      img {
        border-radius: 8px;
      }
    }
  }
  button {
    width: 160px;
    height: 48px;
    color: #fff;
    background: #d87d4a;
    border: none;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }
`;
