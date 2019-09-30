import React from "react"
import { Container } from "./footer.style";
import { LabelMedium } from "../label";
import { Column, Row } from "../direction";
import { color } from "../../theme";

export class Footer extends React.Component<{}, {}> {


  render() {
    return (
      <Container>
        <Column>
          <LabelMedium style={{ color: color.palette.white }}>
            MyHbarTokens.com &nbsp;<strong>- Hashgraph ERC20 Token wallet.</strong>
          </LabelMedium>
          <LabelMedium style={{ color: color.palette.white }}>Created using: Hash.js, React.js, HAPI & Composer</LabelMedium>
        </Column>
        <Column style={{ marginLeft: "auto", marginRight: 20 }}>
          <LabelMedium style={{ color: color.palette.white, fontWeight: "bold" }}>Hashing Systems</LabelMedium>
          <LabelMedium style={{ color: color.palette.white }}>HBAR: 0.0.1761</LabelMedium>
        </Column>
      </Container>
    )
  }
}