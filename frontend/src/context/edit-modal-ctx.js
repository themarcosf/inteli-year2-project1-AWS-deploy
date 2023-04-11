import { createContext, useState } from "react";

const EditModalCtx = createContext({
  projectId: null,
  showModal: false,
  showModalHandler: () => {},
});

export const EditModalCtxProvider = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [projectId, setProjectId] = useState();

  const showModalHandler = (id) => {
    setProjectId(id);
    setShowModal(!showModal);
  };

  return (
    <EditModalCtx.Provider
      value={{
        showModal: showModal,
        showModalHandler: showModalHandler,
        projectId: projectId,
      }}
    >
      {props.children}
    </EditModalCtx.Provider>
  );
};

export default EditModalCtx
