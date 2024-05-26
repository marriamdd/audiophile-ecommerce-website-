import { useContext, useEffect } from "react";
import { Audiophile_Context } from "../App";
import SeeProductComponent from "./SeeProductComponent";
import styled from "styled-components";

const RenderCategories = ({ category }: { category: string }) => {
  const { data } = useContext(Audiophile_Context);
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
      {reversedData.map((item, index) =>
        item.category == category ? (
          <CategoryItemDiv key={index}>
            <img src={item.image.mobile} alt="" />
            {item.new ? <h3>NEW PRODUCT</h3> : null}
            <h2>{item.slug}</h2>
            <p>{item.description}</p>
            <SeeProductComponent
              to={`/single/${item.name}`}
              backGround={"#D87D4A"}
            />
          </CategoryItemDiv>
        ) : null
      )}
    </CategoryContainer>
  );
};

export default RenderCategories;

const CategoryContainer = styled.div`
  /* padding-top: 6.4rem; */
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .categoryTitle {
    display: flex;
    height: 102px;
    width: 375px;
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
    }
  }
`;
const CategoryItemDiv = styled.div`
  width: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000;
  text-align: center;
  & > img {
    width: 327px;
    height: 352px;
    border-radius: 8px;
    background: #f1f1f1;
  }
  & > h3 {
    color: #d87d4a;
    font-size: 1.4rem;
    font-weight: 400;
    letter-spacing: 1rem;
    text-transform: uppercase;
    padding-top: 2.4rem;
  }
  & > h2 {
    font-size: 2.8rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding-block: 2.4rem;
  }
  & > p {
    width: 327px;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2.5rem;
    padding-bottom: 2.4rem;
  }
`;
