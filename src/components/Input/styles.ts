import { colors } from './../../styles/themes/default';
import styled from 'styled-components';

export const Inputs = styled.span`
  @media (min-width: 550px) {
    display: flex;
    min-width: 85%;
  }
`

export const MobileBr = styled.br`
  @media (min-width: 550px) {
    display: none;
  }
`;

export const MobileSpan = styled.span`
  line-height: 1.5rem;
  margin-right: 0.75rem;
  
  @media (min-width: 550px) {
    display: none;
  }
`;

export const Visitor = styled.span`
  color: ${() => colors.inputVisitor}
`

export const Element = styled.span`
  color: ${() => colors.inputElement}
`

export const Hostname = styled.span`
  color: ${() => colors.inputHostname}
`

export const Command = styled.span`
  color: ${() => colors.inputCommand}
`
