import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { Audiophile_Context } from "../App";

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
  // const { data } = useContext(Audiophile_Context);

  return (
    <CategoriesStyles height={height} width={width}>
      <div className="eachCategoryDiv">
        <img className="category_img" src={img} alt={`category-${title}`} />
        <h3>{title}</h3>
        <Link to={link}>
          SHOP{" "}
          <span>
            <img
              className="arrow"
              src="assets/shared/desktop/icon-arrow-right.svg"
              alt=""
            />
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
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 1.071px;
    text-transform: uppercase;
  }
  a {
    text-decoration: none;
    align-self: center;
    color: #000;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  .eachCategoryDiv {
    position: relative;
    width: 327px;
    height: 165px;
    border-radius: 8px;
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
    .arrow {
      width: 5px;
      height: 10px;
      align-items: center;
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
  }
`;
