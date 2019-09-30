import React from 'react';
import styled from 'styled-components';
import { Zoom, Fade } from 'react-reveal';
import { IoIosClose } from 'react-icons/io';

const Modal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  transition: all 0.5s;
  justify-content: center;
  opacity: ${(props: {visible: boolean}) => props.visible ? 1 : 0}
  visibility: ${(props: {visible: boolean}) => props.visible ? 'visible' : 'hidden'}
`

const Picture = styled.img`
  max-width: 90vw;
  max-height: 80vh;
  width: auto;
  height: auto;

  @media only screen and (max-width: 900px) {
    max-width: 80vw;
    max-height: 50vh;
    width: auto;
    height: auto;
  }

`

const PictureWrapper = styled.div`
  padding: 100px 15px 15px 15px;
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 900px) {
    padding: 150px 15px 15px 15px;
  }
`

const CloseButton = styled(IoIosClose)`
  position: absolute;
  top: 100px;
  right: 15px;
  color: #8b2219;
  width: 35px;
  height: 35px;

  @media only screen and (max-width: 900px) {
    width: 20px;
    height: 20px;
  }
`

interface ModalPictureProps {
  visible: boolean,
  pictureSource: string,
  onRequestClose(): void 
}

export class ModalPicture extends React.Component<ModalPictureProps> {

  render() {
    const { visible, pictureSource, onRequestClose } = this.props
    return (
      <Modal visible={visible} onClick={onRequestClose}>
        <PictureWrapper className="modal-picture-wapper">
          <Picture src={pictureSource} />
        </PictureWrapper>
      </Modal>
    )
  }
}