import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
// modules
import { closeModal } from '../../modules/modal';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.25);
  width: 100vw;
  height: 100vh;
  z-index: 20;
`;

const Modal = () => {
  const modalList = useSelector((state) => state.modal.modalList);
  const dispatch = useDispatch();
  const show = modalList.length !== 0;

  const onCloseModal = (id) => dispatch(closeModal(id));

  const ModalList = modalList.map((modal) => {
    const Content = modal['elem'];
    return (
      <Content
        key={modal['id']}
        ModalOff={() => {
          onCloseModal(modal['id']);
        }}
        args={modal['args']}
      />
    );
  });

  return <>{show && <ModalBackground>{ModalList}</ModalBackground>}</>;
};

export default Modal;
