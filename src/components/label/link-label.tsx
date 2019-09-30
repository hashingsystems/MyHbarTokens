import { color } from "../../theme/color";
import styled from "styled-components";
import { TabletMaxWidth, MobileMaxWidth, TabletMinWidth, DesktopMinWidth, FONT_SIZE_MEDIUM, FONT_SIZE_SEMI_MEDIUM } from "../../constants";

const LinkLabelBase = styled.div`
  font-family: inherit;
  font-weight: 300;
  color: ${color.palette.blueLight};
  text-decoration: ${(props: {underline?: boolean}) => props.underline ? "underline" : "none" }
  cursor: pointer;
`

export const LinkLabelMedium = styled(LinkLabelBase)`
  && {
    ${FONT_SIZE_MEDIUM}
  }
`
export const LinkLabelSemiMedium = styled(LinkLabelBase)`
  && {
    ${FONT_SIZE_SEMI_MEDIUM}
  }
`