import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
// modules
import { closeModal } from "../../modules/modal";
import ModalBasicForm from "../../components/modal/ModalBasicForm";

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
    return (
      <ModalBasicForm
        key={modal["id"]}
        ModalOff={() => {
          onCloseModal(modal["id"]);
        }}
        Content={modal["elem"]}
        args={modal["args"]}
      ></ModalBasicForm>
    );
  });

  return <>{show && <ModalBackground>{ModalList}</ModalBackground>}</>;
};

export default Modal;
