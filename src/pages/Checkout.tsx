import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";

interface InputTypes {
  name: string;
  emailAddress: string;
  phoneNumber: number;
  yourAddress: string;
  zipCode: number;
  city: string;
  country: string;
  paymentMethod: string;
}
export default function Checkout() {
  const { register, handleSubmit } = useForm<InputTypes>();

  const onSubmit: SubmitHandler<InputTypes> = (data) => console.log(data);

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Section>
          <h2>Billing details</h2>

          <InputContainer>
            <label htmlFor="name">Name</label>
            <input id="name" {...register("name")} />
          </InputContainer>
          <InputContainer>
            <label htmlFor="emailAddress">Email Address</label>
            <input id="emailAddress" {...register("emailAddress")} />
          </InputContainer>
          <InputContainer>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input id="phoneNumber" {...register("phoneNumber")} />
          </InputContainer>
        </Section>
        <Section>
          <h2>shipping info</h2>

          <InputContainer>
            <label htmlFor="yourAddress">Your Address</label>
            <input id="yourAddress" {...register("yourAddress")} />
          </InputContainer>

          <InputContainer>
            <label htmlFor="zipCode">ZIP Code</label>
            <input id="zipCode" {...register("zipCode")} />
          </InputContainer>

          <InputContainer>
            <label htmlFor="city">City</label>
            <input id="city" {...register("city")} />
          </InputContainer>

          <InputContainer>
            <label htmlFor="country">Country</label>
            <input id="country" {...register("country")} />
          </InputContainer>
        </Section>
        <Section>
          <h2>payment details</h2>
          <label>Payment Method</label>
          <CheckBoxContainer>
            <input
              id="e_Money"
              type="radio"
              value="e_Money"
              {...register("paymentMethod")}
            />
            <label htmlFor="e_Money">E-Money </label>
          </CheckBoxContainer>
          <CheckBoxContainer>
            <input
              id="cash"
              value="cash"
              type="radio"
              {...register("paymentMethod")}
            />
            <label htmlFor="cash">Cash on Delivery </label>
          </CheckBoxContainer>
        </Section>
        <input type="submit" />
      </Form>
    </div>
  );
}
const CheckBoxContainer = styled.div`
  width: 280px;
  height: 56px;
  background: #fff;
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 2.1rem;
  padding-left: 2rem;
  label {
    color: #000;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: -0.25px;
  }
  input[type="radio"]:checked {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: orange;
    border: 3px solid white;
    box-shadow: 0 0 0 2px #cfcfcf;
    background-clip: padding-box;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    color: #000;
    font-family: Manrope;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.214px;
  }
  input {
    width: 280px;
    height: 56px;
    border-radius: 8px;
    border: 1px solid #cfcfcf;
    background: #fff;
    padding-left: 2rem;

    color: #000;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: -0.25px;
    opacity: 0.4;
  }
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  h2 {
    color: #d87d4a;
    font-size: 13px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0.929px;
    text-transform: uppercase;
  }
  & > label {
    color: #000;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: -0.214px;
  }
`;
