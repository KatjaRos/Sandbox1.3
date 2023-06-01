import "./styles.css";

if (document.readyState !== "loading") {
  console.log("Document is ready!");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready after waiting!");
    initializeCode();
  });
}

function initializeCode() {
  const printTextButton = document.getElementById("my-button");
  printTextButton.addEventListener("click", function () {
    const text = "Hello world";
    console.log(text);
    const newText = "My notebook";
    const newDiv = document.getElementById("header1");
    let something = document.createElement("h1");
    newDiv.innerText = newText;
  });
}
