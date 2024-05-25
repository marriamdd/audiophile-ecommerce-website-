import styled from "styled-components";

function AddToCartButtons() {
  return (
    <AddToCartButtonsStyle>
      <div>
        <span className="minus">-</span>
        <input defaultValue={1} />
        <span className="plus">+</span>
      </div>

      <button>ADD TO CART</button>
    </AddToCartButtonsStyle>
  );
}

export default AddToCartButtons;

const AddToCartButtonsStyle = styled.div`
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
