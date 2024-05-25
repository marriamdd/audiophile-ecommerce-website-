import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Audiophile_Context } from "../App";
import styled from "styled-components";

function SingleProduct() {
  const { name } = useParams();
  const { data } = useContext(Audiophile_Context);
  const singleProductData = data.find((item) => item.name == name);
  const navigate = useNavigate();
  console.log(singleProductData);
  return (
    <SingleProductContainer>
      <h3 onClick={() => navigate(-1)}>Go back</h3>
      <img src={singleProductData?.image.mobile} alt="" />
    </SingleProductContainer>
  );
}

export default SingleProduct;
const SingleProductContainer = styled.div`
  img {
    width: 327px;
    height: 327px;
    flex-shrink: 0;
  }
`;
