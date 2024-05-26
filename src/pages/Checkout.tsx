import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import GoBackButton from "../components/GoBackButton";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputMask from "react-input-mask";
const schema = yup.object({
  name: yup
    .string()
    .required("is required")
    .min(5, "must be at least 5 characters long ")
    .test("includes space", "Please enter a first and last name", (value) => {
      return value?.includes(" ");
    }),
  emailAddress: yup
    .string()
    .required("is required")
    .matches(/@gmail\.com$/, "Wrong format"),
  phoneNumber: yup
    .string()
    .required("is required")
    .min(15, "must be at least 10 characters long"),
  yourAddress: yup.string().required("is required"),
  zipCode: yup
    .string()
    .required("is required")
    .min(5, "must be at least 5 characters long "),

  city: yup.string().required("is required"),
  country: yup.string().required("is required"),
  paymentMethod: yup.string().required("is required"),
  E_Money_Number: yup.string().required("is required"),
  E_Money_Pin: yup
    .string()
    .min(4, "must be at least 4 characters long ")
    .required("is required"),
});
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputTypes>({
    resolver: yupResolver(schema),
  });

  const [e_moneyGraph, setE_moneyGraph] = useState(false);
  const onSubmit: SubmitHandler<InputTypes> = (data) => {
    console.log(data);
  };
  console.log(errors);

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

          <InputContainer error={errors.name ? errors.name.message : ""}>
            <div>
              <label htmlFor="name">Name</label>
              {errors.name && <p>{errors.name.message}</p>}
            </div>

            <input placeholder="Alexei Ward" id="name" {...register("name")} />
          </InputContainer>
          <InputContainer
            error={errors.emailAddress ? errors.emailAddress.message : ""}
          >
            <div>
              <label htmlFor="emailAddress">Email Address</label>
              {errors.emailAddress && <p>{errors.emailAddress.message}</p>}
            </div>

            <input
              placeholder="alexei@mail.com"
              id="emailAddress"
              {...register("emailAddress")}
            />
          </InputContainer>
          <InputContainer
            error={errors.phoneNumber ? errors.phoneNumber.message : ""}
          >
            <div>
              <label htmlFor="phoneNumber">Phone Number</label>
              {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
            </div>

            <InputMask
              {...register("phoneNumber")}
              id="phoneNumber"
              mask="+1 999-999-9999"
              placeholder="+1 202-555-0136"
              maskChar={""}
            />
          </InputContainer>
        </Section>
        <Section>
          <h2>shipping info</h2>

          <InputContainer
            error={errors.yourAddress ? errors.yourAddress.message : ""}
          >
            <div>
              <label htmlFor="yourAddress">Your Address</label>
              {errors.yourAddress && <p>{errors.yourAddress.message}</p>}
            </div>

            <input
              placeholder="1137 Williams Avenue"
              id="yourAddress"
              {...register("yourAddress")}
            />
          </InputContainer>

          <InputContainer error={errors.zipCode ? errors.zipCode.message : ""}>
            <div>
              <label htmlFor="zipCode">ZIP Code</label>
              {errors.zipCode && <p>{errors.zipCode.message}</p>}
            </div>

            <input placeholder="10001" id="zipCode" {...register("zipCode")} />
          </InputContainer>

          <InputContainer error={errors.city ? errors.city.message : ""}>
            <div>
              <label htmlFor="city">City</label>
              {errors.city && <p>{errors.city.message}</p>}
            </div>

            <input placeholder="New York" id="city" {...register("city")} />
          </InputContainer>

          <InputContainer error={errors.country ? errors.country.message : ""}>
            <div>
              <label htmlFor="country">Country</label>
              {errors.country && <p>{errors.country.message}</p>}
            </div>

            <input
              placeholder="United States"
              id="country"
              {...register("country")}
            />
          </InputContainer>
        </Section>
        <Section>
          <h2>payment details</h2>
          <div className="paymentErrorDiv">
            <label>Payment Method</label>
            {errors.paymentMethod && <p>{errors.paymentMethod.message}</p>}
          </div>

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
              <InputContainer
                error={
                  errors.E_Money_Number ? errors.E_Money_Number.message : ""
                }
              >
                <div>
                  <label htmlFor="e_Money_number">e-Money Number</label>
                  {errors.E_Money_Number && (
                    <p>{errors.E_Money_Number.message}</p>
                  )}
                </div>

                <input
                  placeholder="238521993"
                  id="e_Money_number"
                  {...register("E_Money_Number")}
                />
              </InputContainer>
              <InputContainer
                error={errors.E_Money_Pin ? errors.E_Money_Pin.message : ""}
              >
                <div>
                  <label htmlFor="e_Money_Pin">e-Money PIN</label>
                  {errors.E_Money_Pin && <p>{errors.E_Money_Pin.message}</p>}
                </div>

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
    padding-block: 2rem;
    width: 100%;
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
  margin-bottom: 3rem;
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

const InputContainer = styled.div<{ error?: string }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > div {
    display: flex;
    justify-content: space-between;
    p {
      color: #cd2c2c;
      text-align: right;
      font-size: 12px;
      font-weight: 400;
      letter-spacing: -0.214px;
    }
  }
  label {
    cursor: pointer;
    color: ${(props) => (props.error ? "red" : "#000")};
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
    border: 1px solid ${(props) => (props.error ? "red" : "#cfcfcf")};

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
  .paymentErrorDiv {
    display: flex;
    justify-content: space-between;
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
    p {
      color: #cd2c2c;
      text-align: right;
      font-size: 12px;
      font-weight: 400;
      letter-spacing: -0.214px;
    }
  }
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
