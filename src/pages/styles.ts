import styled from 'styled-components';
import { colors } from '../styles/themes/default';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`

export const TerminalContainer = styled.div`
  width: 98vw;
  height: 95vh;
  padding: 10px 30px 10px 10px;
  background: ${() => colors.terminal };
  border: 3px solid ${() => colors.border};
  border-radius: 6px;
`