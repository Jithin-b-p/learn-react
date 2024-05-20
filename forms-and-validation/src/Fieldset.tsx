import styled from "@emotion/styled";

type FieldSetProps = {
  legend: string;
  children: React.ReactNode;
};
const Container = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Legend = styled.legend``;
function Fieldset({ legend, children }: FieldSetProps) {
  return (
    <Container>
      <Legend>{legend}</Legend>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}

export default Fieldset;
