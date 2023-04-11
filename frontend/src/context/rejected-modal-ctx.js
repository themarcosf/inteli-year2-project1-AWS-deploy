import { createContext, useState } from "react";

const RejectedModalCtx = createContext({
  showModal: false,
  showModalHandler: () => {},
});

export const RejectedModalCtxProvider = (props) => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <RejectedModalCtx.Provider
      value={{
        showModal: showModal,
        showModalHandler: showModalHandler,
      }}
    >
      {props.children}
    </RejectedModalCtx.Provider>
  );
};

export default RejectedModalCtx
