import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Audiophile_Context } from "../App";
import styled from "styled-components";
import AddToCartButtons from "../components/AddToCartButtons";
import GoBackButton from "../components/GoBackButton";
import CartContent from "../components/CartContent";
import CategoriesContainerComponent from "../components/CategoriesContainerComponent";
import GalleryContainer from "../components/GalleryContainer";
import YouMayAlsoLike from "../components/YouMayAlsoLike";
import Hero from "../components/Hero";

function SingleProduct() {
  const { name } = useParams();
  const { data, showCart, setShowCart } = useContext(Audiophile_Context);
  const singleProductData = data.find((item) => item.name == name);

  let formattedPrice = "";
  if (singleProductData?.price) {
    formattedPrice = `$${(singleProductData?.price / 1000).toFixed(3)}`;
  }

  return (
    <SingleProductContainer
      onClick={(e) => {
        const clickedElement = e.target as HTMLElement;
        if (!clickedElement.closest(".cartComponent")) {
          setShowCart(false);
        }
      }}
    >
      {showCart && <CartContent />}
      <GoBackButton />
      <div className="product_container">
        <picture className="productPicture">
          <source
            width="540px"
            height="560px"
            media="(min-width:1440px)"
            srcSet={singleProductData?.image.desktop}
          />
          <source
            width="281px"
            height=" 480px"
            media="(min-width:768px)"
            srcSet={singleProductData?.image.tablet}
          />

          <img
            width=" 327px"
            height="327px"
            src={singleProductData?.image.mobile}
            alt="product"
          />
        </picture>

        <div className="product_text_content">
          {singleProductData?.new ? (
            <h3 className="newPRoduct">NEW PRODUCT</h3>
          ) : null}
          <h2 className="product_name">{singleProductData?.name}</h2>
          <p>{singleProductData?.description}</p>
          <h3 className="price">{formattedPrice}</h3>
          <div className="addToCartButtons">
            <AddToCartButtons singleProductData={singleProductData} />
          </div>
        </div>
      </div>
      <div className="features_box">
        <div>
          <h2 className="featureTitle">FEATURES</h2>
          <p>{singleProductData?.features}</p>
        </div>

        <div className="boxDiv">
          <h2>IN THE BOX</h2>
          <div className="boxItems">
            {singleProductData?.includes.map((item) => (
              <div key={Math.random()}>
                <span className="orange">{`${item.quantity}x`}</span>{" "}
                <span>{item.item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <GalleryContainer singleProductData={singleProductData} />
      <YouMayAlsoLike singleProductData={singleProductData} />
      <CategoriesContainerComponent position={"static"} zindex={0} />
      <Hero />
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

  padding: 2rem 2.5rem;
  gap: 2.4rem;
  position: relative;

  .product_text_content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 2rem 2.5rem;
    gap: 3rem;
    p {
      @media screen and (min-width: 768px) {
        width: 33.9rem;
      }
      @media screen and (min-width: 1440px) {
        width: 39rem;
      }
    }
    h3 {
      @media screen and (min-width: 768px) {
        width: 33.9rem;
        margin-left: -3rem;
      }
      @media screen and (min-width: 1440px) {
        width: 39rem;
        margin-left: 0rem;
      }
    }
    h2 {
      @media screen and (min-width: 768px) {
        width: 33.9rem;
      }
      @media screen and (min-width: 1440px) {
        width: 39.9rem;
        margin-left: 0rem;
      }
    }
    @media screen and (min-width: 768px) {
      width: 33.9rem;
    }
    @media screen and (min-width: 1440px) {
      width: 44.5rem;
      align-items: flex-start;
      transition: align-items 1s ease;
    }
    .addToCartButtons {
      @media screen and (min-width: 768px) {
        margin-right: 5rem;
      }
    }
    .newPRoduct {
      align-self: flex-start;
      color: #d87d4a;
      font-size: 1.4rem;
      font-weight: 400;
      letter-spacing: 1rem;
      text-transform: uppercase;
    }
  }
  .product_container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (min-width: 768px) {
      flex-direction: row;
      gap: 10rem;
      transition: gap 1s ease;
    }
    @media screen and (min-width: 1100px) {
      gap: 20rem;
      transition: gap 1s ease;
    }
    @media screen and (min-width: 1440px) {
      width: 111rem;
    }
  }
  .productPicture {
    display: flex;
    justify-content: center;
  }

  h2 {
    font-size: 2.8rem;
    font-weight: 700;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
  }
  p {
    opacity: 0.5;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.5rem;
    white-space: pre-line;
  }
  .price {
    align-self: flex-start;
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: 1.286px;
    text-transform: uppercase;
  }
  .features_box {
    @media screen and (min-width: 1440px) {
      width: 111rem;
      display: flex;
      /* gap: 12rem; */
      justify-content: space-between;
      margin-bottom: 4rem;
      p {
        width: 63.5rem;
      }
    }
  }
  .boxItems {
    @media screen and (min-width: 768px) {
      margin-right: 15rem;
    }
    @media screen and (min-width: 1440px) {
      margin-right: 0;
    }
  }
  .boxDiv {
    margin-block: 8.8rem;
    width: 32.7rem;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 0.8rem;
    @media screen and (min-width: 768px) {
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
    }
    @media screen and (min-width: 1440px) {
      flex-direction: column;
      width: 35rem;
    }

    .product_name {
      margin-bottom: 2rem;
      @media screen and (min-width: 768px) {
        width: 33.9rem;
      }
    }
    .orange {
      color: #d87d4a;
    }
    span {
      color: #000;
      opacity: 0.5;
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 2.5rem;
    }
    div div {
      display: flex;
      gap: 1.2rem;
    }
  }

  .featureTitle {
    align-self: flex-start;
    margin-block: 3rem;
    font-size: 2.4rem;
    line-height: 3.6rem;
    letter-spacing: 0.857px;
  }
`;
