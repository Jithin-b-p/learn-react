import React from "react";
import styled from "@emotion/styled";
import Fieldset from "./Fieldset";
import Field from "./Field";

const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  console.log(event.target);
  const formData = new FormData(event.target as HTMLFormElement);
  console.log(formData.get("password"));
};

function App() {
  return (
    <Form onSubmit={handleOnSubmit}>
      <Fieldset legend="Sign up">
        <Field label="email" htmlFor="email">
          <input id="email" type="email" name="email" />
        </Field>
        <Field label="password" htmlFor="password">
          <input id="password" type="password" name="password" />
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
