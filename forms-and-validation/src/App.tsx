import styled from "@emotion/styled";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import Fieldset from "./Fieldset";
import Field from "./Field";

const SigninFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
type SigninFormType = z.infer<typeof SigninFormSchema>;

function App() {
  //One of the key benefits of react-hook-form library is that it simplifies state management, eliminating the need for multiple useState hooks.
  const { register, reset, handleSubmit, formState } = useForm<SigninFormType>({
    resolver: zodResolver(SigninFormSchema),
  });
  const { errors } = formState;

  const onSubmit: SubmitHandler<SigninFormType> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Fieldset legend="Sign up">
        <Field label="email" htmlFor="email" error={errors.email?.message}>
          <input {...register("email")} id="email" type="text" />
        </Field>
        <Field
          label="password"
          htmlFor="password"
          error={errors.password?.message}
        >
          <input {...register("password")} id="password" type="password" />
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
