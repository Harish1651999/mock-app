import React from "react";
import classes from "./DemoList.module.css";

const DemoList = () => {
  return (
    <div className={classes.list}>
      <h2>My Title</h2>
      <ul>
        <li>1</li>
      </ul>
    </div>
  );
};

export default DemoList;
