import { createContext, useState } from "react";

const ProjectModalCtx = createContext({
  showModal: false,
  showModalHandler: () => {},
});

export const ProjectModalCtxProvider = (props) => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <ProjectModalCtx.Provider
      value={{
        showModal: showModal,
        showModalHandler: showModalHandler,
      }}
    >
      {props.children}
    </ProjectModalCtx.Provider>
  );
};

export default ProjectModalCtx
