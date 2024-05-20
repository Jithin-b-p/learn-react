import styled from "@emotion/styled";
import Fieldset from "./Fieldset";
import Field from "./Field";
import { SubmitHandler, useForm } from "react-hook-form";

type SigninFormType = {
  email: string;
  password: string;
};

function App() {
  //One of the key benefits of react-hook-form library is that it simplifies state management, eliminating the need for multiple useState hooks.
  const { register, handleSubmit, formState } = useForm<SigninFormType>();
  const { errors } = formState;

  const onSubmit: SubmitHandler<SigninFormType> = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Fieldset legend="Sign up">
        <Field label="email" htmlFor="email" error={errors.email?.message}>
          <input
            {...register("email", {
              required: "email ID required",
              validate: (value) => value.includes("@") || "not an email format",
            })}
            id="email"
            type="text"
          />
        </Field>
        <Field
          label="password"
          htmlFor="password"
          error={errors.password?.message}
        >
          <input
            {...register("password", {
              required: "password required",
              minLength: { value: 8, message: "length must be greater than 8" },
            })}
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
