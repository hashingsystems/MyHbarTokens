import React from "react";
import { ModalContainer, BackgroundOverlay } from "./modal-primary.style";

interface IModalPrimaryProps extends React.AnchorHTMLAttributes<HTMLElement> {
  visible: boolean,
  onRequestClose?(): void
}

export class ModalPrimary extends React.Component<IModalPrimaryProps, {}> {
  render() {
    const { visible, ...otherProps } = this.props
    return (
      <ModalContainer
        visible={this.props.visible}
        {...otherProps}
      >
        <BackgroundOverlay src="images/app-overlay-promoting-image.png" />
        {this.props.children}
      </ModalContainer>
    )
  }
}