// Primary Function to Run Code Updates

const populateCode = exNum => {
  const demoArea = document.querySelector(`.${exNum} .ex-container`);
  const cssArea = document.querySelector(`.${exNum} .code-container.css`);
  const htmlArea = document.querySelector(`.${exNum} .code-container.html`);
  demoArea.innerHTML = eval(exNum).html;
  cssArea.innerHTML = eval(exNum).css;
  document.querySelector(`.${exNum} .tab.css`).classList.add("active");
  htmlArea.innerText = eval(exNum).html;
  cssArea.style.display = "block";
};

// Events

[...document.querySelectorAll(".tab-area button")].forEach(button => {
  button.addEventListener("click", event => {
    let lang = event.target.innerText.toLowerCase();
    const exNum = event.target.parentElement.parentElement.parentElement.classList[1];
    if (lang === "css") {
      document.querySelector(`.${exNum} .code-container.html`).style.display = "none";
      document.querySelector(`.${exNum} .tab.html`).classList.remove("active");
      document.querySelector(`.${exNum} .code-container.css`).style.display = "block";
      document.querySelector(`.${exNum} .tab.css`).classList.add("active");
    } else {
      document.querySelector(`.${exNum} .code-container.css`).style.display = "none";
      document.querySelector(`.${exNum} .tab.css`).classList.remove("active");
      document.querySelector(`.${exNum} .code-container.html`).style.display = "block";
      document.querySelector(`.${exNum} .tab.html`).classList.add("active");
    }
  });
});


// Ex1: Absolutely Centered

const ex1 = {
  html: `
  <div class="parent blue" >
  <div class="child coral" contenteditable>:)</div>`,
  css: `
  .ex1 .parent {
    display: grid;
    place-items: center;

    width: 100%;
    height: 100%;
  }

  .ex1 .child {
    /* etc. */
    border-radius: 10px;
    font-size: 2rem;
    text-align: center;
    padding: 0.5rem;
  }`
};

const ex2 = {
  html: `
  <div class="parent pink">
    <div class="child green">1</div>
    <div class="child green">2</div>
    <div class="child green">3</div>
  </div>`,
  css: `
  .ex2 .parent {
    display: flex;
    flex-wrap: wrap;
  }

  .ex2 .child {
    /*  If we don't want the items to stretch
        on new lines: */
    flex: 0 1 200px;
    /*  If we do want the items to stretch: */
    flex: 1 1 200px;
    margin: 5px;

    /* etc */
    border-radius: 10px;
    font-size: 2rem;
    text-align: center;
    padding: 0.5rem;
  }`
};

const ex3 = {
  html: `
  <div class="parent">
    <div class="sidebar pink" contenteditable>
    Min: 150px / Max: 25%
    </div>
    <div class="content blue" contenteditable>
      This element takes the second grid position (1fr), meaning
      it takes up the rest of the remaining space.
      <br></br>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Omnis nulla architecto maxime modi nisi. Quas saepe dolorum, 
      architecto quia fugit nulla! Natus, iure eveniet ex iusto 
      tempora animi quibusdam porro?
    </div>
  </div>
  `,
  css: `
  .ex3 .parent {
    display: grid;
    grid-template-columns: minmax(150px, 25%) 1fr;
  }`
};

populateCode("ex1");
populateCode("ex2");
populateCode("ex3");