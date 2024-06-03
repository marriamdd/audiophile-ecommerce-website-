import { Link } from "react-router-dom";
import styled from "styled-components";

const SeeProductComponent = ({
  backGround,
  to,
  color,
  border,
}: {
  backGround: string;
  to: string;
  color: string;
  border: string;
}) => {
  return (
    <Button backGround={backGround} color={color} border={border}>
      <div>
        <Link to={`${to}`}>See Product</Link>
      </div>
    </Button>
  );
};
const Button = styled.button<{
  backGround: string;
  color: string;
  border: string;
}>`
  div {
    width: 16rem;
    height: 5rem;
    align-content: center;
  }
  background: ${(props) => props.backGround && props.backGround};
  border: ${(props) => props.border && props.border};
  width: 16rem;
  height: 5rem;
  margin-bottom: 2rem;
  :hover {
    background: ${(props) =>
      props.backGround == "transparent" ? "black" : "#4C4C4C"};
    a {
      color: white;
    }
  }

  a {
    text-decoration: none;
    color: ${(props) => props.color && props.color};
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    text-decoration: none;
  }
`;
export default SeeProductComponent;
