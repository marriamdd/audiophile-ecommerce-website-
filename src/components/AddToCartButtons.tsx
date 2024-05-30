import { useContext, useState } from "react";
import styled from "styled-components";
import { Audiophile_Context } from "../App";
import { IProduct } from "../types/Types";

const AddToCartButtons = ({
  singleProductData,
}: {
  singleProductData: IProduct | undefined;
}) => {
  const { cartItems, setCartItems } = useContext(Audiophile_Context);
  const [quantity, setQuantity] = useState(1);

  const handleAddProduct = () => {
    if (singleProductData) {
      const { id, name, price, image } = singleProductData;
      const productExist = cartItems.find(
        (item) => item.id === singleProductData.id
      );

      if (productExist) {
        setCartItems(
          cartItems.map((item) =>
            item.id === singleProductData.id
              ? { ...productExist, quantity: productExist.quantity }
              : item
          )
        );
      } else {
        setCartItems([
          ...cartItems,
          {
            id,
            name,
            price,
            img: image.mobile,
            quantity: quantity,
          },
        ]);
      }
    }
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  console.log(quantity);
  return (
    <AddToCartButtonsStyle>
      <div>
        <span onClick={handleDecreaseQuantity} className="minus">
          -
        </span>
        <input value={quantity} />
        <span onClick={handleIncreaseQuantity} className="plus">
          +
        </span>
      </div>

      <button onClick={handleAddProduct}>ADD TO CART</button>
    </AddToCartButtonsStyle>
  );
};

export default AddToCartButtons;

export const AddToCartButtonsStyle = styled.div`
  display: flex;
  gap: 1rem;
  & > div {
    position: relative;
  }
  & > div input {
    padding-left: 5.5rem;
    border: none;
    width: 120px;
    height: 48px;
    background: #f1f1f1;
  }
  span {
    color: #000;
    font-size: 13px;
    opacity: 0.25;
    font-weight: 700;
  }
  .minus {
    width: 40px;
    height: 48px;
    position: absolute;
    padding-inline: 1.4rem;

    padding-top: 1.4rem;
    left: 0.4rem;
  }
  .plus {
    height: 48px;
    width: 40px;
    position: absolute;

    padding-top: 1.4rem;
    padding-inline: 1.4rem;
    right: 0.4rem;
  }
  button {
    background: #d87d4a;
    border: none;
    width: 160px;
    height: 48px;
    color: #fff;
    text-align: center;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1px;
  }
`;
