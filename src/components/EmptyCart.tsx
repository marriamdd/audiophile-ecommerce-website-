import React from "react";
import styled from "styled-components";

export default function EmptyCart() {
  return <EmptyCartStyles>EmptyCart</EmptyCartStyles>;
}
const EmptyCartStyles = styled.div`
  display: flex;
  width: 327px;
  top: 10rem;

  position: absolute;
  border-radius: 8px;
  flex-direction: column;
  z-index: 9999999999;
  position: absolute;
  gap: 3rem;
  background: #fff;
  justify-content: center;
  align-items: center;
  padding-bottom: 3rem;
`;
