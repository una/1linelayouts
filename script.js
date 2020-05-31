// Primary Function to Run Code Updates

const populateCode = (exNum) => {
  const demoArea = document.querySelector(`.${exNum} .ex-container`);
  const tabArea = document.querySelector(`.${exNum} .code-container`);
  demoArea.innerHTML = eval(exNum).html;
  tabArea.innerHTML = eval(exNum).css
}

// Ex1: Absolutely Centered

const ex1 = {
  "html": `<div class="parent blue" >
    <div class="child coral" contenteditable>:)</div>`,
  "css": `.parent {
    display: grid;
    place-items: center;

    width: 100%;
    height: 100%;
  }

  .child {
    /* etc. */
    border-radius: 10px;
    font-size: 2rem;
    text-align: center;
    padding: 0.5rem;
  }`
};

// Events

document.querySelector('.ex1 .html-tab').addEventListener('click', function() {
  populateCode('ex1', 'html')
});
document.querySelector('.ex1 .css-tab').addEventListener('click', function() {
  populateCode('ex1', 'html')
});


populateCode('ex1')