import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Audiophile_Context } from "../App";
import styled from "styled-components";
import AddToCartButtons from "../components/AddToCartButtons";
import GoBackButton from "../components/GoBackButton";
import CartContent from "../components/CartContent";
import CategoriesContainerComponent from "../components/CategoriesContainerComponent";

function SingleProduct() {
  const { name } = useParams();
  const { data, showCart, setShowCart } = useContext(Audiophile_Context);
  const singleProductData = data.find((item) => item.name == name);

  console.log(singleProductData);
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
        <picture>
          <source
            media="(min-width:768px)"
            srcSet={singleProductData?.image.tablet}
          />
          <source
            media="(min-width:1440px)"
            srcSet={singleProductData?.image.desktop}
          />
          <img src={singleProductData?.image.mobile} alt="" />
        </picture>
        <div className="product_text_content">
          {singleProductData?.new ? (
            <h3 className="newPRoduct">NEW PRODUCT</h3>
          ) : null}
          <h2 className="product_name">{singleProductData?.name}</h2>
          <p>{singleProductData?.description}</p>
          <h3 className="price">{formattedPrice}</h3>
          <AddToCartButtons singleProductData={singleProductData} />
        </div>
      </div>
      <div className="features_box">
        <div>
          <h2 className="featureTitle">FEATURES</h2>
          <p>{singleProductData?.features}</p>
        </div>

        <div className="boxDiv">
          <h2>IN THE BOX</h2>
          <div>
            {singleProductData?.includes.map((item) => (
              <div key={Math.random()}>
                <span className="orange">{`${item.quantity}x`}</span>{" "}
                <span>{item.item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="galleryContainer">
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
      </div>
      <div className="mayAlsoLikeContainer">
        {" "}
        <h2>YOU MAY ALSO LIKE</h2>
        <div className="mayAlsoLikeItemsDiv">
          {singleProductData?.others.map((item) => (
            <div key={Math.random()} className="mayAlsoLikeItem">
              <div className="imgDiv">
                <picture>
                  <source media="min-width:789px" srcSet={item.image.desktop} />
                  <source
                    media="min-width:1440px"
                    srcSet={item.image.desktop}
                  />
                  <img src={item.image.mobile} alt="" />
                </picture>
              </div>
              <h2>{item.name}</h2>
              <button>See Product</button>
            </div>
          ))}
        </div>
      </div>
      <CategoriesContainerComponent position={"static"} zindex={0} />
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

    @media screen and (min-width: 768px) {
      width: 33.9rem;
    }

    .newPRoduct {
      align-self: flex-start;
      color: #d87d4a;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 10px;
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
      gap: 5rem;
    }
  }
  picture {
    display: flex;
    justify-content: center;
    img {
      @media screen and (min-width: 768px) {
        width: 281px;
        height: 480px;
        border-radius: 8px;
      }
      @media screen and (min-width: 1440px) {
        width: 540px;
        height: 560px;
      }
    }
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
  .features_box {
    @media screen and (min-width: 1440px) {
      display: flex;
      gap: 12rem;
      p {
        width: 635px;
      }
    }
  }
  .boxDiv {
    margin-block: 8.8rem;
    width: 327px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 0.8rem;
    @media screen and (min-width: 768px) {
      width: 100%;
      flex-direction: row;
    }
    @media screen and (min-width: 1440px) {
      flex-direction: column;
    }

    .product_name {
      margin-bottom: 2rem;
      @media screen and (min-width: 768px) {
        width: 339px;
      }
    }
    .orange {
      color: #d87d4a;
    }
    span {
      color: #000;
      opacity: 0.5;
      font-size: 15px;
      font-weight: 700;
      line-height: 25px;
    }
    div div {
      display: flex;
      gap: 1.2rem;
    }
  }
  .galleryContainer {
    /* width: 335.687px; */
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
      }
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
        background: #f1f1f1;

        @media screen and (min-width: 768px) {
          width: 230px;
          height: 318px;
          border-radius: 8px;
        }
        img {
          width: 327px;
          height: 120px;
          border-radius: 8px;
          @media screen and (min-width: 768px) {
            width: 230.124px;
            height: 172px;
            flex-shrink: 0;
          }
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
  }
`;
