import styled from "@emotion/styled";

type FieldProps = {
  label: string;
  htmlFor?: string;
  error?: string;
  children: React.ReactNode;
};

function Field({ label, htmlFor, error, children }: FieldProps) {
  const id = htmlFor;
  console.log(error);
  return (
    <Container>
      {label && <Label htmlFor={id}>{label}</Label>}
      {children}
      {error && <Error role="alert">{error}</Error>}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;
const Label = styled.label``;
const Error = styled.div``;
export default Field;
