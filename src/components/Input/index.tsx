import { Visitor, Element, Hostname, Command, Inputs, MobileBr, MobileSpan } from "./styles";

export function Input() {
  return(
    <Inputs>
      <Visitor>visitante</Visitor>
      <Element>@</Element>
      <Hostname>terminal.maykongsn.dev</Hostname>
      <Element>:~$</Element>&nbsp;
      <MobileBr />
      <MobileSpan>&#62;</MobileSpan>
      <Command>npx maykongsn</Command>
    </Inputs>
  )
}