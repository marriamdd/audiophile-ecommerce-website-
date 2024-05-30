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
      <Link to={`${to}`}>See Product</Link>
    </Button>
  );
};
const Button = styled.button<{
  backGround: string;
  color: string;
  border: string;
}>`
  width: 16rem;
  height: 4.8rem;
  background: ${(props) => props.backGround && props.backGround};
  border: ${(props) => props.border && props.border};
  margin-bottom: 2rem;
  @media screen and (min-width: 768px) {
    width: 160px;
    height: 48px;
  }
  & > a {
    color: ${(props) => props.color && props.color};
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    text-decoration: none;
  }
`;
export default SeeProductComponent;
