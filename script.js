// Primary Function to Run Code Updates

const populateCode = (exNum) => {
  const demoArea = document.querySelector(`.${exNum} .ex-container`);
  const cssArea = document.querySelector(`.${exNum} .css`);
  const htmlArea = document.querySelector(`.${exNum} .html`);
  demoArea.innerHTML = eval(exNum).html;
  cssArea.innerHTML = eval(exNum).css;
  htmlArea.innerText = eval(exNum).html;
  cssArea.style.display = 'block';
}


// Ex1: Absolutely Centered

const ex1 = {
  "html": `
    <div class="parent blue" >
    <div class="child coral" contenteditable>:)</div>`,
  "css": `
  .parent {
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

[...document.querySelectorAll('.tab-area button')].forEach(button => {
  button.addEventListener('click', (event) => {
    let lang = event.target.innerText.toLowerCase();
    const exNum = 'ex1';
    if (lang === 'css') {
      document.querySelector(`.${exNum} .html`).style.display = 'none';
      document.querySelector(`.${exNum} .css`).style.display = 'block';
    } else {
      document.querySelector(`.${exNum} .css`).style.display = 'none';
      document.querySelector(`.${exNum} .html`).style.display = 'block';
    }
  })
});


populateCode('ex1')