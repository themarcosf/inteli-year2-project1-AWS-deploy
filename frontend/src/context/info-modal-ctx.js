import { createContext, useState } from "react";

const InfoModalCtx = createContext({
  showModal: false,
  projectData: {},
  showModalHandler: () => {},
  projectDataHandler: () => {},
});

export const InfoModalCtxProvider = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [projectData, setProjectData] = useState();

  const showModalHandler = () => {
    setShowModal(!showModal);
  };

  const projectDataHandler = (data) => {
    setProjectData(data);
  };

  return (
    <InfoModalCtx.Provider
      value={{
        showModal: showModal,
        showModalHandler: showModalHandler,
        projectDataHandler: projectDataHandler,
        projectData: projectData,
      }}
    >
      {props.children}
    </InfoModalCtx.Provider>
  );
};

export default InfoModalCtx;
