import React from "react"
import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close'
import { SnackbarContent as MuiSnackbarContent } from "@material-ui/core"
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import { SnackbarContentProps as MuISnackBarContentProps } from "@material-ui/core/SnackbarContent";
import { color } from "../../theme";
import { FONT_PRIMARY, FONT_SIZE_MEDIUM } from "../../constants";

export type ISnackBarType = "success" | "warning" | "error" | "info"

export const iconMessageIndicators = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
}

const snackbarBackground = {
  success: color.palette.white,
  warning: color.palette.yellowLight,
  error: color.palette.redLight,
  info: color.palette.blueLight,

}

export interface ISnackBarContentProps {
  type: ISnackBarType,
  message: string,
  onClose?(): void
}

export const SnackbarContent = styled((props: MuISnackBarContentProps & ISnackBarContentProps) => 
  {
    const { type, message, ...otherProps } = props
    const IconMessageIndicator = iconMessageIndicators[type]
    return (
      <MuiSnackbarContent
        message={
          <span className="snackbar-message-panel">
            <IconMessageIndicator className="snackbar-message-icon" color="inherit" />
            <div className="snackbar-message">{message}</div>
          </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={() => {
              props.onClose && props.onClose() 
            }}
          >
            <CloseIcon color="disabled" />
          </IconButton>,
        ]}
        {...otherProps}
      />
    )
  })`
    && {
      background-color: ${props => snackbarBackground[props.type]}
      border-radius: 50px;
    }

    & .snackbar-message-panel {
      display: flex;
      align-items: center;
      ${FONT_PRIMARY}
      ${FONT_SIZE_MEDIUM}
      color: ${color.palette.greenLight}
    }

    & .snackbar-message {
      margin-left: 8px;
      color: ${color.palette.black};
    }

    & .snackbar-message-icon {
      font-size: 20px;
    }

  `