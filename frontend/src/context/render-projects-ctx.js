import { createContext, useState } from "react";

const renderProjects = createContext({
  boolRender: true,
  boolRenderHandler: () => {},
});

export const renderProjectsProvider = (props) => {
  const [boolRender, setBoolRender] = useState(true);

  const boolRenderHandler = () => {
    setBoolRender(!boolRender);
  };

  return (
    <renderProjects.Provider
      value={{
        boolRender: boolRender,
        boolRenderHandler: boolRenderHandler,
      }}
    >
      {props.children}
    </renderProjects.Provider>
  );
};

export default renderProjects
