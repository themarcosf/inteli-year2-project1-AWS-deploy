import { createContext, useState } from "react";

const ApprovedModalCtx = createContext({
  showModal: false,
  showModalHandler: () => {},
});

export const ApprovedModalCtxProvider = (props) => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <ApprovedModalCtx.Provider
      value={{
        showModal: showModal,
        showModalHandler: showModalHandler,
      }}
    >
      {props.children}
    </ApprovedModalCtx.Provider>
  );
};

export default ApprovedModalCtx
