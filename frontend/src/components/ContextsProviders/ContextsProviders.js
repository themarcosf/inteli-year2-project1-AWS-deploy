import { ProjectModalCtxProvider } from "../../context/project-modal-ctx";
import { InfoModalCtxProvider } from "../../context/info-modal-ctx";
import { ApplyModalCtxProvider } from "../../context/apply-modal-ctx";
import { EditModalCtxProvider } from "../../context/edit-modal-ctx";

const ContextsProviders = (props) => {
  return (
    <EditModalCtxProvider>
      <InfoModalCtxProvider>
        <ApplyModalCtxProvider>
          <ProjectModalCtxProvider>{props.children}</ProjectModalCtxProvider>
        </ApplyModalCtxProvider>
      </InfoModalCtxProvider>
    </EditModalCtxProvider>
  );
};

export default ContextsProviders;
