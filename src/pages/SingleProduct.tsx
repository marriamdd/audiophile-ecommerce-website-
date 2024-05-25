import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Audiophile_Context } from "../App";
import styled from "styled-components";
import AddToCartButtons from "../components/AddToCartButtons";
import SeeProductComponent from "../components/SeeProductComponent";

function SingleProduct() {
  const { name } = useParams();
  const { data } = useContext(Audiophile_Context);
  const singleProductData = data.find((item) => item.name == name);
  const navigate = useNavigate();
  console.log(singleProductData);
  let formatedPrice = "";
  if (singleProductData?.price) {
    formatedPrice = `$${(singleProductData?.price / 1000).toFixed(3)}`;
  }

  return (
    <SingleProductContainer>
      <h3 className="goBack" onClick={() => navigate(-1)}>
        Go back
      </h3>
      <img src={singleProductData?.image.mobile} alt="" />
      {singleProductData?.new ? (
        <h3 className="newPRoduct">NEW PRODUCT</h3>
      ) : null}
      <h2>{singleProductData?.name}</h2>
      <p>{singleProductData?.description}</p>
      <h3 className="price">{formatedPrice}</h3>
      <AddToCartButtons />
      <h2 className="featureTitle">FEATURES</h2>
      <p>{singleProductData?.features}</p>

      <div className="boxDiv">
        <h2>IN THE BOX</h2>

        {singleProductData?.includes.map((item) => (
          <div>
            <span>{`${item.quantity}x`}</span> <p>{item.item}</p>
          </div>
        ))}
      </div>

      <div className="galleryContainer">
        <img
          className="child"
          src={singleProductData?.gallery.first.mobile}
          alt=""
        />
        <img
          className="child"
          src={singleProductData?.gallery.second.mobile}
          alt=""
        />
        <img
          className="child"
          src={singleProductData?.gallery.third.mobile}
          alt=""
        />
      </div>
      <div className="mayAlsoLikeContainer">
        {" "}
        <h2>YOU MAY ALSO LIKE</h2>
        {singleProductData?.others.map((item) => (
          <div className="mayAlsoLikeItem">
            <div className="imgDiv">
              <img src={item.image.mobile} alt="" />
            </div>
            <h2>{item.name}</h2>

            <SeeProductComponent
              to={`/single/${item.name}`}
              backGround={"#D87D4A"}
            />
          </div>
        ))}
      </div>
    </SingleProductContainer>
  );
}

export default SingleProduct;
const SingleProductContainer = styled.div`
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 327px;
  margin-inline: 2.5rem;
  margin-block: 2rem;
  gap: 2.4rem;
  .newPRoduct {
    align-self: flex-start;
    color: #d87d4a;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 10px;
    text-transform: uppercase;
  }
  img {
    width: 327px;
    height: 327px;
    flex-shrink: 0;
  }
  h2 {
    font-size: 28px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  p {
    opacity: 0.5;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    white-space: pre-line;
  }
  .price {
    align-self: flex-start;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1.286px;
    text-transform: uppercase;
  }
  .goBack {
    align-self: flex-start;
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
    opacity: 0.5;
  }
  .boxDiv {
    margin-block: 8.8rem;
    width: 327px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 0.8rem;
    h2 {
      margin-bottom: 2rem;
    }
    span {
      color: #d87d4a;
      font-size: 15px;
      font-weight: 700;
      line-height: 25px;
    }
    div {
      display: flex;
      gap: 1rem;
    }
  }
  .galleryContainer {
    width: 335.687px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .child {
      border-radius: 8px;
      height: 223.714px;
    }
    .child:nth-child(3) {
      border-radius: 8px;
      height: 400px;
    }
  }
  .featureTitle {
    align-self: flex-start;
    margin-block: 3rem;
    font-size: 2.4rem;
    line-height: 3.6rem;
    letter-spacing: 0.857px;
  }
  .mayAlsoLikeContainer {
    margin-block: 3rem;
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
    }
    .mayAlsoLikeItem {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
    }
    .imgDiv {
      margin-block: 2rem;
      width: 327px;
      height: 120px;
      border-radius: 8px;
      background: #f1f1f1;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 190px;
        height: 110px;
      }
    }
  }
`;
