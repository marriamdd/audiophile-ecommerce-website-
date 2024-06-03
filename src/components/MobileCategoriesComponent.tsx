import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import arrow from "../assets/icon-arrow-right.svg";
interface IMobileCategoriesProps {
  title: string;
  link: string;
  img: string;
  height: string;
  width: string;
}
const MobileCategoriesComponent: React.FC<IMobileCategoriesProps> = ({
  link,
  title,
  img,
  height,
  width,
}) => {
  return (
    <CategoriesStyles height={height} width={width}>
      <div className="eachCategoryDiv">
        <img className="category_img" src={img} alt={`category-${title}`} />
        <h3>{title}</h3>
        <Link to={link}>
          SHOP{" "}
          <span>
            <img className="arrow" src={arrow} alt="" />
          </span>
        </Link>
      </div>
    </CategoriesStyles>
  );
};
export default MobileCategoriesComponent;
const CategoriesStyles = styled.div<{ height: string; width: string }>`
  @media screen and (min-width: 768px) {
  }

  h3 {
    align-self: center;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 1.071px;
    text-transform: uppercase;
    @media screen and (min-width: 1440px) {
      font-size: 1.8rem;
      letter-spacing: 1.286px;
    }
  }
  a {
    cursor: pointer;
    text-decoration: none;
    align-self: center;
    color: #000;
    font-size: 1.3;
    font-weight: 700;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
  }
  .eachCategoryDiv {
    position: relative;
    width: 32.7rem;
    height: 16.5rem;
    border-radius: 0.8rem;
    background: #f1f1f1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.7rem;
    padding-top: 4rem;
    @media screen and (min-width: 768px) {
      width: 223px;
      height: 165px;
    }
    @media screen and (min-width: 1440px) {
      width: 350px;
      height: 204px;
      flex-shrink: 0;
    }
    .arrow {
      width: 5px;
      height: 10px;
      padding-top: 0.2rem;
      align-items: center;
    }
    a:hover {
      color: orange;
    }
  }
  .category_img {
    position: absolute;

    top: ${(props) => (props.width == "147px" ? "-7rem" : "-5.5rem")};
    left: ${(props) => (props.width == "147px" ? "9.5rem" : "12.4rem")};
    width: ${(props) => props.width && props.width};
    height: ${(props) => props.height && props.height};
    flex-shrink: 0;
    @media screen and (min-width: 768px) {
      left: ${(props) => (props.width == "147px" ? "4.5rem" : "8rem")};
    }
    @media screen and (min-width: 1440px) {
      width: ${(props) => (props.width == "147px" ? " 178px" : "121.489px")};
      height: 161px;
      top: ${(props) => (props.width == "147px" ? "-9rem" : "-9rem")};
      left: ${(props) => (props.width == "147px" ? "9rem" : "12rem")};
    }
  }
`;
