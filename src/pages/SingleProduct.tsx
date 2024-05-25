import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Audiophile_Context } from "../App";

function SingleProduct() {
  const { name } = useParams();
  const { data } = useContext(Audiophile_Context);
  const singleProduct = data.find((item) => item.name == name);

  console.log(singleProduct);
  return <div></div>;
}

export default SingleProduct;
