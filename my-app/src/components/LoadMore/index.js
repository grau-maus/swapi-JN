import React, { useState } from "react";
import "./LoadMore.css";

function LoadMore({ dispatchCallback }) {
  const defaultClass = "text-link";
  const defaultText = "More...";
  const loadText = "Loading...";
  const errorText = "Error!";
  const [className, setClassName] = useState(defaultClass);
  const [text, setText] = useState("More...");

  function handleClick() {
    setText(loadText);
    setClassName("");
    dispatchCallback()
      .then(() => {
        setText(defaultText);
        setClassName(defaultClass);
      })
      .catch((error) => {
        setText(errorText);
        console.error(error);
      });
  }

  return (
    <h3 className={className} onClick={handleClick}>
      {text}
    </h3>
  );
}

export default LoadMore;
