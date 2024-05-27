import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Audiophile_Context } from "../App";
import styled from "styled-components";
import AddToCartButtons from "../components/AddToCartButtons";
import GoBackButton from "../components/GoBackButton";
import CartContent from "../components/CartContent";

function SingleProduct() {
  const { name } = useParams();
  const { data, showCart, setShowCart } = useContext(Audiophile_Context);
  const singleProductData = data.find((item) => item.name == name);

  console.log(singleProductData);
  let formatedPrice = "";
  if (singleProductData?.price) {
    formatedPrice = `$${(singleProductData?.price / 1000).toFixed(3)}`;
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
      <img src={singleProductData?.image.mobile} alt="" />
      {singleProductData?.new ? (
        <h3 className="newPRoduct">NEW PRODUCT</h3>
      ) : null}
      <h2>{singleProductData?.name}</h2>
      <p>{singleProductData?.description}</p>
      <h3 className="price">{formatedPrice}</h3>
      <AddToCartButtons singleProductData={singleProductData} />
      <h2 className="featureTitle">FEATURES</h2>
      <p>{singleProductData?.features}</p>

      <div className="boxDiv">
        <h2>IN THE BOX</h2>

        {singleProductData?.includes.map((item) => (
          <div key={Math.random()}>
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
          <div key={Math.random()} className="mayAlsoLikeItem">
            <div className="imgDiv">
              <img src={item.image.mobile} alt="" />
            </div>
            <h2>{item.name}</h2>
            <button>See Product</button>
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

  padding: 2rem 2.5rem;
  gap: 2.4rem;
  position: relative;
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
      margin-bottom: 4rem;
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
      height: 130px;
      border-radius: 8px;
      background: #f1f1f1;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        height: 110px;
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
