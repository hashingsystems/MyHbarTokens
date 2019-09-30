import styled from "styled-components";
import { FONT_SIZE_SMALL, FONT_SIZE_MEDIUM, FONT_SIZE_LARGE, FONT_SIZE_SEMI_MEDIUM, FONT_SIZE_LARGER } from "../../constants";

const LabelBase = styled.div`
  font-family: inherit;
  color: ${props => props.theme.textPrimary};
  display: flex;
  align-items: center;
`

export const LabelSmall = styled(LabelBase)`
  && {
    ${FONT_SIZE_SMALL}
  }
`

export const LabelSemiMedium = styled(LabelBase)`
  && {
    ${FONT_SIZE_SEMI_MEDIUM}
  }
`

export const LabelMedium = styled(LabelBase)`
  && {
    ${FONT_SIZE_MEDIUM}
  }
`

export const LabelLarge = styled(LabelBase)`
  && {
    ${FONT_SIZE_LARGE}
  }
`

export const LabelLarger = styled(LabelBase)`
  && {
    ${FONT_SIZE_LARGER}
  }
`