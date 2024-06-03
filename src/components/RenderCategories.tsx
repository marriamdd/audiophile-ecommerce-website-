import { useContext, useEffect } from "react";
import { Audiophile_Context } from "../App";
import SeeProductComponent from "./SeeProductComponent";
import styled from "styled-components";
import CartContent from "./CartContent";

const RenderCategories = ({ category }: { category: string }) => {
  const { data, showCart } = useContext(Audiophile_Context);
  const reversedData = [...data].reverse();
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("sheicvala");
  }, [category]);
  return (
    <CategoryContainer>
      <div className="categoryTitle">
        <h2>{category}</h2>
      </div>
      {showCart && <CartContent />}
      {reversedData.map((item, index) =>
        item.category == category ? (
          <CategoryItemDiv key={index}>
            <Picture index={index}>
              <source
                media="(min-width:768px)"
                srcSet={item.categoryImage.tablet}
              />
              <source
                media="(min-width:1140px)"
                srcSet={item.categoryImage.desktop}
              />
              <img srcSet={item.categoryImage.mobile} alt="" />
            </Picture>
            <Context index={index}>
              {item.new ? <h3>NEW PRODUCT</h3> : null}
              <h2>{item.slug}</h2>
              <p>{item.description}</p>
              <SeeProductComponent
                to={`/single/${item.name}`}
                backGround={"#D87D4A"}
                color={"white"}
                border={"none"}
              />
            </Context>
          </CategoryItemDiv>
        ) : null
      )}
    </CategoryContainer>
  );
};

export default RenderCategories;

const CategoryContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (min-width: 1440px) {
    margin-bottom: 15rem;
  }
  .categoryTitle {
    display: flex;
    height: 102px;
    align-items: center;
    justify-content: center;
    background: #000;
    & > h2 {
      color: #fff;
      text-align: center;
      font-size: 28px;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      @media screen and (min-width: 768px) {
        font-size: 40px;
        line-height: 44px;
        letter-spacing: 1.429px;
      }
    }
  }
`;
const Picture = styled.picture<{ index: number }>`
  @media screen and (min-width: 1440px) {
    order: ${(props) => (props.index % 2 == 0 ? "1" : "2")};
  }
  img {
    width: 327px;
    height: 352px;
    border-radius: 8px;
    background: #f1f1f1;
    margin-top: 3rem;
    @media screen and (min-width: 768px) {
      width: 689px;
      height: 352px;
    }
    @media screen and (min-width: 1440px) {
      margin-top: 8rem;
      width: 650px;
      height: 560px;
    }
  }
`;
const Context = styled.div<{ index: number }>`
  @media screen and (min-width: 1440px) {
    width: 540px;
    height: 560px;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    align-items: start;
    justify-content: center;
    order: ${(props) => (props.index % 2 == 0 ? "2" : "1")};
  }
`;
const CategoryItemDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000;
  text-align: center;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 10rem;
    margin-bottom: 5rem;
  }

  h3 {
    color: #d87d4a;
    font-size: 1.4rem;
    font-weight: 400;
    letter-spacing: 1rem;
    text-transform: uppercase;
    padding-top: 2.4rem;
  }
  h2 {
    font-size: 2.8rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding-block: 2.4rem;
    @media screen and (min-width: 1440px) {
      font-size: 40px;
    }
  }
  p {
    width: 327px;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2.5rem;
    padding-bottom: 2.4rem;
    @media screen and (min-width: 768px) {
      width: 572px;
    }
    @media screen and (min-width: 1440px) {
      width: 445px;
      text-align: start;
    }
  }
`;
