import styled from 'styled-components/native';

import { Button } from 'react-native-paper';

const StyledButton = styled(Button)`
  color: ${({ color }) => (color ? color : 'white')};
`;

export { StyledButton };
