import { css, keyframes } from 'styled-components'
import { MobileMaxWidth, TabletMinWidth, TabletMaxWidth, DesktopMinWidth } from '.';

export const ROW = css`
  display: flex;
  flex-direction: row;
`

export const COLUMN = css`
  display: flex;
  flex-direction: column;
`

export const FULL = css`
  display: flex;
  align-self: stretch;
`

export const FONT_PRIMARY = css`
  font-family: inherit;
`


export const FONT_SIZE_SMALL = css`
  @media only screen and (max-width: ${MobileMaxWidth}) {
    font-size: 8px;
  }

  @media only screen and (min-width: ${TabletMinWidth}) and (max-width: ${TabletMaxWidth}) {
    font-size: 10px;
  }

  @media only screen and (min-width: ${DesktopMinWidth}) {
    font-size: 13px;
  }
`

export const FONT_SIZE_SEMI_MEDIUM = css`
  @media only screen and (max-width: ${MobileMaxWidth}) {
    font-size: 9px;
  }

  @media only screen and (min-width: ${TabletMinWidth}) and (max-width: ${TabletMaxWidth}) {
    font-size: 11px;
  }

  @media only screen and (min-width: ${DesktopMinWidth}) {
    font-size: 13px;
  }
`

export const FONT_SIZE_MEDIUM = css`
  @media only screen and (max-width: ${MobileMaxWidth}) {
    font-size: 10px;
  }

  @media only screen and (min-width: ${TabletMinWidth}) and (max-width: ${TabletMaxWidth}) {
    font-size: 13px;
  }

  @media only screen and (min-width: ${DesktopMinWidth}) {
    font-size: 15px;
  }
`

export const FONT_SIZE_LARGE = css`
  @media only screen and (max-width: ${MobileMaxWidth}) {
    font-size: 14px;
  }

  @media only screen and (min-width: ${TabletMinWidth}) and (max-width: ${TabletMaxWidth}) {
    font-size: 16px;
  }

  @media only screen and (min-width: ${DesktopMinWidth}) {
    font-size: 17px;
  }
`

export const FONT_SIZE_LARGER = css`
  @media only screen and (max-width: ${MobileMaxWidth}) {
    font-size: 16px;
  }

  @media only screen and (min-width: ${TabletMinWidth}) and (max-width: ${TabletMaxWidth}) {
    font-size: 17px;
  }

  @media only screen and (min-width: ${DesktopMinWidth}) {
    font-size: 18px;
  }
`


