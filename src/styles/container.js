import styled from 'styled-components/native';

const Container = styled.View`
  padding-horizontal: 20px;
  margin-vertical: 10px;
`;

const MarginContainer = styled.View`
  margin-vertical: ${({ vertical }) => (vertical ? vertical : '0px')};
  margin-horizontal: ${({ horizontal }) => (horizontal ? horizontal : '0px')};
`;

const KeyboardAvoidingContainer = styled.KeyboardAvoidingView`
  padding-horizontal: 20px;
  margin-vertical: 10px;
`;

export { MarginContainer, KeyboardAvoidingContainer };
export default Container;
