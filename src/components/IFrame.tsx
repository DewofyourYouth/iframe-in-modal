import React, { FunctionComponent } from "react";
import IframeResizer from "iframe-resizer-react";
import "./IFrame.css";

interface IFrameProps {
  isOpen: boolean;
}

const IFrameContainer: FunctionComponent<IFrameProps> = ({
  isOpen,
}: IFrameProps) => {
  return (
    <IframeResizer
      className={isOpen ? "cool-beans" : "no-beans"}
      src="/modal-form"
    />
  );
};

export default IFrameContainer;
