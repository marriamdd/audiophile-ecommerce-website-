import { useContext } from "react";
import { Audiophile_Context } from "../App";

export const useCartFunctions = () => {
  const { cartItems } = useContext(Audiophile_Context);

  const formatPrice = (price: number) => {
    return `$${(price / 1000).toFixed(3)}`;
  };

  const totalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const vat = (totalPrice: number) => {
    return totalPrice * 0.18;
  };

  const grandTotal = (totalPrice: number, vat: number) => {
    return totalPrice + vat + 50;
  };

  return {
    formatPrice,
    totalPrice,
    vat,
    grandTotal,
  };
};
