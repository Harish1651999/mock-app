import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  return (
    <React.Fragment>
      <MyParagraph>{props.show ? "This is new" : ""}</MyParagraph>
    </React.Fragment>
  );
};

export default React.memo(DemoOutput);
