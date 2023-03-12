import styled from 'styled-components';
import { colors } from '../styles/themes/default';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const TerminalContainer = styled.div`
  /* width: 100%; */
  /* max-width: 1020px; */
  max-height: calc(100vh - 2rem);
  height: 95vh;
  padding: 20px 30px 10px 20px;
  background: ${() => colors.terminal };
  border: 3px solid ${() => colors.border};
  border-radius: 6px;
  color: #fff;
  overflow-y: auto;
`