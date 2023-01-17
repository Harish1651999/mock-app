import React, { useState, useCallback } from "react";
import "./App.css";
import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button/Button";

function App() {
  const [listTitle, setListTitle] = useState("My List");

  const titleChangeHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  return (
    <div className="App">
      <DemoList title={listTitle} items={[5, 3, 1, 10, 9]} />
      <Button onClick={titleChangeHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
