import { createContext, useState } from "react";
export const ModalContext = createContext();

function ModalProvider({ children }) {
  const intialModalFields = {
    show: false,
    modalType: "",
    identifiers: {
      folderId: "",
      cardID: "",
    },
  };
  const [isOpenModal, setIsOpenModal] = useState({ ...intialModalFields });
  const openModal = (value) => {
    setIsOpenModal(value);
  };
  const closeModal = () => {
    setIsOpenModal({ ...intialModalFields });
  };
  // this object is having properties that i need in my whole app;
  const ModalFeatures = {
    isOpenModal: isOpenModal,
    openModal: openModal,
    closeModal: closeModal,
  };
  return (
    <ModalContext.Provider value={ModalFeatures}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;

// we will setup router.
// playground context.