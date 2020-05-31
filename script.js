// Primary Function to Run Code Updates

const populateCode = (exNum, tabContent) => {
  const tabArea = document.querySelector(`.${exNum} .code-area`);
  tabArea.innerHTML = exNum[tabContent]
}

// Ex1: Embedded Sidebar

const ex1 = {
  html: `<div class="parent" >
    <div class="child" contenteditable>:)</div>`,
  css: `.parent {
    display: grid;
    place-items: center;

    background: lightblue;
    width: 500px;
    height: 500px;

    resize: both;
    overflow: auto;
  }

  .child {
    // etc.
    padding: 0.5rem;
    border-radius: 10px;
    border: 1px solid red;
    background: lightpink;
    font-size: 2rem;
    text-align: center;
  }`
};

// Events

document.querySelector('.ex1 .html-button').addEventListener('click', function() {
  codeContent = ex1Html;
  updateCodeContent(codeContent, 'ex1');
});

populateCode('ex1', 'css')