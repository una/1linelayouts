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
  <div class="box coral" contenteditable>
    :)
  </div>`,
  css: `
  .ex1 .parent {
    display: grid;
    place-items: center;

    width: 100%;
    height: 100%;
  }`,
  codepen: 'https://codepen.io/una/pen/YzyYbBx'
};

const ex2 = {
  html: `
  <div class="parent pink">
    <div class="box green">1</div>
    <div class="box green">2</div>
    <div class="box green">3</div>
  </div>`,
  css: `
  .ex2 .parent {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .ex2 .box {
    /*  Items stretching: */
    flex: 1 1 200px;
    /*  No stretching: */
    flex: 0 1 150px;
    margin: 5px;
  }`,
  codepen: 'https://codepen.io/una/pen/WNQdBza'
};

const ex3 = {
  html: `
  <div class="parent">
    <div class="section yellow" contenteditable>
    Min: 150px / Max: 25%
    </div>
    <div class="section purple" contenteditable>
      This element takes the second grid position (1fr), meaning
      it takes up the rest of the remaining space.
    </div>
  </div>
  `,
  css: `
  .ex3 .parent {
    display: grid;
    grid-template-columns: minmax(150px, 25%) 1fr;
  }`,
  codepen: 'https://codepen.io/una/pen/gOaNeWL'
};

const ex4 = {
  html: `
  <div class="parent">
    <header class="blue section">Header</header>
    <main class="coral section">Main</main>
    <footer class="purple section">Footer Content</footer>
  </div>
  `,
  css: `
  .ex4 .parent {
    display: grid;
    grid-template-rows: auto 1fr auto;
  }`,
  codepen: 'https://codepen.io/una/pen/bGVXPWB'
};

const ex5 = {
  html: `
  <div class="parent">
    <header class="pink section">Header</header>
    <div class="left-side blue section" contenteditable>Left Sidebar</div>
    <main class="section coral" contenteditable> Main Content</main>
    <div class="right-side yellow section" contenteditable>Right Sidebar</div>
    <footer class="green section">Footer</footer>
  </div>
  `,
  css: `
  .ex5 .parent {
    display: grid;
    grid-template: auto 1fr auto / auto 1fr auto
  }
  
  .ex5 header {
    padding: 2rem;
    grid-column: 1 / 4;
  }

  .ex5 .left-side {
    grid-column: 1 / 2;
  }

  .ex5 main {
    grid-column: 2 / 3;
  }

  .ex5 .right-side {
    grid-column: 3 / 4;
  }

  .ex5 footer {
    grid-column: 1 / 4;
  }`,
  codepen: 'https://codepen.io/una/pen/bGVXPWB'
};

populateCode("ex1");
populateCode("ex2");
populateCode("ex3");
populateCode("ex4");
populateCode("ex5");