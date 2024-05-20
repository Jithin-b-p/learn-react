import React from "react";
import styled from "@emotion/styled";
import Fieldset from "./Fieldset";
import Field from "./Field";
import { useForm } from "react-hook-form";

type SigninFormType = {
  email: string;
  password: string;
};

const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const formData = new FormData(event.target as HTMLFormElement);
  console.log(formData.get("password"));
};

function App() {
  //One of the key benefits of react-hook-form library is that it simplifies state management, eliminating the need for multiple useState hooks.
  const {
    register,
    formState: { errors },
  } = useForm<SigninFormType>();

  return (
    <Form onSubmit={handleOnSubmit}>
      <Fieldset legend="Sign up">
        <Field label="email" htmlFor="email" error={errors.email?.message}>
          <input
            {...register("email", { required: true })}
            id="email"
            type="text"
          />
        </Field>
        <Field label="password" htmlFor="password">
          <input
            {...register("password", { required: true, min: 8 })}
            id="password"
            type="password"
          />
        </Field>
        <button>submit</button>
      </Fieldset>
    </Form>
  );
}
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default App;
