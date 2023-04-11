import { createContext, useState } from "react";

const ApplyModalCtx = createContext({
  showModal: false,
  showModalHandler: () => {},
});

export const ApplyModalCtxProvider = (props) => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <ApplyModalCtx.Provider
      value={{
        showModal: showModal,
        showModalHandler: showModalHandler,
      }}
    >
      {props.children}
    </ApplyModalCtx.Provider>
  );
};

export default ApplyModalCtx
