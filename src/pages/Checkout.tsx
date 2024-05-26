import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import GoBackButton from "../components/GoBackButton";

interface InputTypes {
  name: string;
  emailAddress: string;
  phoneNumber: string;
  yourAddress: string;
  zipCode: string;
  city: string;
  country: string;
  paymentMethod: string;
  E_Money_Number: string;
  E_Money_Pin: string;
}
export default function Checkout() {
  const { register, handleSubmit } = useForm<InputTypes>();
  // const [formValues, setFormValues] = useState<InputTypes[]>([]);
  const [e_moneyGraph, setE_moneyGraph] = useState(false);
  const onSubmit: SubmitHandler<InputTypes> = (data) => {
    // setFormValues([data]);
    console.log(data);
  };
  // console.log(formValues[0].paymentMethod);
  return (
    <CheckoutPage>
      <div>
        {" "}
        <GoBackButton />
      </div>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>CHECKOUT</h1>
        <Section>
          <h2>Billing details</h2>

          <InputContainer>
            <label htmlFor="name">Name</label>
            <input placeholder="Alexei Ward" id="name" {...register("name")} />
          </InputContainer>
          <InputContainer>
            <label htmlFor="emailAddress">Email Address</label>
            <input
              placeholder="alexei@mail.com"
              id="emailAddress"
              {...register("emailAddress")}
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              placeholder="+1 202-555-0136"
              id="phoneNumber"
              {...register("phoneNumber")}
            />
          </InputContainer>
        </Section>
        <Section>
          <h2>shipping info</h2>

          <InputContainer>
            <label htmlFor="yourAddress">Your Address</label>
            <input
              placeholder="1137 Williams Avenue"
              id="yourAddress"
              {...register("yourAddress")}
            />
          </InputContainer>

          <InputContainer>
            <label htmlFor="zipCode">ZIP Code</label>
            <input placeholder="10001" id="zipCode" {...register("zipCode")} />
          </InputContainer>

          <InputContainer>
            <label htmlFor="city">City</label>
            <input placeholder="New York" id="city" {...register("city")} />
          </InputContainer>

          <InputContainer>
            <label htmlFor="country">Country</label>
            <input
              placeholder="United States"
              id="country"
              {...register("country")}
            />
          </InputContainer>
        </Section>
        <Section>
          <h2>payment details</h2>
          <label>Payment Method</label>
          <CheckBoxContainer onClick={() => setE_moneyGraph(true)}>
            <input
              id="e_Money"
              type="radio"
              value="e_Money"
              {...register("paymentMethod")}
            />
            <label htmlFor="e_Money">E-Money </label>
          </CheckBoxContainer>
          <CheckBoxContainer onClick={() => setE_moneyGraph(false)}>
            <input
              id="cash"
              value="cash"
              type="radio"
              {...register("paymentMethod")}
            />
            <label htmlFor="cash">Cash on Delivery </label>
          </CheckBoxContainer>
          {e_moneyGraph == true && (
            <Section>
              <InputContainer>
                <label htmlFor="e_Money_number">e-Money Number</label>
                <input
                  placeholder="238521993"
                  id="e_Money_number"
                  {...register("E_Money_Number")}
                />
              </InputContainer>
              <InputContainer>
                <label htmlFor="e_Money_Pin">e-Money PIN</label>
                <input
                  placeholder="6891"
                  id="e_Money_Pin"
                  {...register("E_Money_Pin")}
                />
              </InputContainer>
            </Section>
          )}
        </Section>
        <Continue_pay type="submit" value={"CONTINUE & PAY"} />
      </Form>
    </CheckoutPage>
  );
}
const CheckoutPage = styled.div`
  background: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  & > div {
    align-self: flex-start;
    padding-left: 4rem;
  }
`;
const Continue_pay = styled.input`
  margin-top: 2rem;
  width: 279px;
  height: 48px;
  background: #d87d4a;
  color: #fff;
  text-align: center;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  border: none;
`;
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
    cursor: pointer;
    color: #000;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: -0.25px;
  }
  input[type="radio"] {
    cursor: pointer;
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
  margin-top: 2rem;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 327px;
  height: 1378px;
  border-radius: 8px;
  background: #fff;
  h1 {
    align-self: flex-start;
    padding-left: 2rem;
    color: #000;
    font-size: 28px;
    font-weight: 700;
    letter-spacing: 1px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    cursor: pointer;
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
    margin-top: 3rem;
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
    cursor: pointer;
  }
`;
