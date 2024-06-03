import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function GoBackButton() {
  const navigate = useNavigate();
  return (
    <GoBack className="goBack" onClick={() => navigate(-1)}>
      Go back
    </GoBack>
  );
}

const GoBack = styled.h3`
  cursor: pointer;
  align-self: flex-start;
  font-size: 15px;
  font-weight: 400;
  line-height: 25px;
  opacity: 0.5;
  &:hover {
    color: #d87d4a;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 26rem;
    transition: all 1s ease;
  }
`;
