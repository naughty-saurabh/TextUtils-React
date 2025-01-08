import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked " + text);

    let newText = text.toUpperCase();

    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLoClick = () => {
    // console.log("Lowercase was clicked " + text);

    let newText = text.toLowerCase();

    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleClearClick = () => {
    let newText = "";

    setText(newText);
    props.showAlert("All Cleared", "success");
  };

  // const handleTranslateClick = () => {

  //   let newText = ;

  //   setText(newText);
  // };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // setText("New Text")
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "#20303c" : "white" }}
      >
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#20303c",
              color: props.mode === "light" ? "#20303c" : "white",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        {/* <button className="btn btn-primary mx-1" onClick={handleTranslateClick}>
          Translate Text
        </button> */}
      </div>

      <div
        className="container"
        style={{ color: props.mode === "light" ? "#20303c" : "white" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {" "}
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <p>{text.split(".").length} sentences</p>

        <h2 mx-1>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the above Text-box to preview it here"}
        </p>
      </div>
    </>
  );
}
