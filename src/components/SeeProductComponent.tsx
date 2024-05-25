import { Link } from "react-router-dom";
import styled from "styled-components";

const SeeProductComponent = ({
  backGround,
  to,
}: {
  backGround: string;
  to: string;
}) => {
  return (
    <Button backGround={backGround}>
      <Link to={`${to}`}>See Product</Link>
    </Button>
  );
};
const Button = styled.button<{ backGround: string }>`
  width: 16rem;
  height: 4.8rem;
  background: ${(props) => props.backGround && props.backGround};
  border: none;
  margin-bottom: 2rem;
  & > a {
    color: #fff;
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    text-decoration: none;
  }
`;
export default SeeProductComponent;
