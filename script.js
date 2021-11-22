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
  }`,
  codepen: 'https://codepen.io/una/pen/YzyYbBx'
};

const ex2 = {
  html: `
  <div class="parent white">
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
    flex: 1 1 150px; /*  Stretching: */
    flex: 0 1 150px; /*  No stretching: */
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
    <header class="blue section" contenteditable>Header</header>
    <main class="coral section" contenteditable>Main</main>
    <footer class="purple section" contenteditable>Footer Content</footer>
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
    grid-template: auto 1fr auto / auto 1fr auto;
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

const ex6 = {
  html: `
  <div class="parent white">
    <div class="span-12 green section">Span 12</div>
    <div class="span-6 coral section">Span 6</div>
    <div class="span-4 blue section">Span 4</div>
    <div class="span-2 yellow section">Span 2</div>
  </div>
  `,
  css: `
  .ex6 .parent {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
  
  .ex6 .span-12 {
    grid-column: 1 / span 12;
  }

  .ex6 .span-6 {
    grid-column: 1 / span 6;
  }

  .ex6 .span-4 {
    grid-column: 4 / span 4;
  }

  .ex6 .span-2 {
    grid-column: 3 / span 2;
  }

  /* centering text */
  .ex6 .section {
    display: grid;
    place-items: center;
    text-align: center
  }`,
  codepen: 'https://codepen.io/una/pen/eYJOYjj'
};

const ex7 = {
  html: `
  <div class="parent white">
    <div class="box pink">1</div>
    <div class="box purple">2</div>
    <div class="box blue">3</div>
    <div class="box green">4</div>
  </div>
  `,
  css: `
  .ex7 .parent {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }`,
  codepen: 'https://codepen.io/una/pen/oNbvNQv'
};

const ex8 = {
  html: `
  <div class="parent white">
    <div class="card yellow">
      <h3>Title - Card 1</h3>
      <p contenteditable>Medium length description with a few more words here.</p>
      <div class="visual pink"></div>
    </div>
    <div class="card yellow">
      <h3>Title - Card 2</h3>
      <p contenteditable>Long Description. Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      <div class="visual blue"></div>
    </div>
    <div class="card yellow">
      <h3>Title - Card 3</h3>
      <p contenteditable>Short Description.</p>
      <div class="visual green"></div>
    </div>
  </div>
  `,
  css: `
  .ex8 .parent {
    height: auto;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
  }

  .ex8 .visual {
    height: 100px;
    width: 100%;
  }

  .ex8 .card {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    justify-content: space-between;
  }

  .ex8 h3 {
    margin: 0
  }`,
  codepen: 'https://codepen.io/una/pen/ExPYomq'
};

const ex9 = {
  html: `
  <div class="parent white">
    <div class="card purple">
      <h1>Title Here</h1>
      <div class="visual yellow"></div>
      <p>Descriptive Text. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed est error repellat veritatis.</p>
    </div>
  </div>
  `,
  css: `
  .ex9 .parent {
    display: grid;
    place-items: center;
  }

  .ex9 .card {
    width: clamp(23ch, 50%, 46ch);
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }

  .ex9 .visual {
      height: 125px;
      width: 100%;
    }
  `,
  codepen: 'https://codepen.io/una/pen/QWyLxaL'
};

const ex10 = {
  html: `
  <div class="parent white">
    <div class="card blue">
      <h1>Video Title</h1>
      <div class="visual green"></div>
      <p>Descriptive text for aspect ratio card demo.</p>
    </div>
  </div>
  `,
  css: `
  .ex10 .parent {
    display: grid;
    place-items: center;
  }

  .ex10 .visual {
    aspect-ratio: 16 / 9;
  }

  .ex10 .card {
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
  `,
  codepen: 'https://codepen.io/una/pen/xxZKzaX'
};



populateCode("ex1");
populateCode("ex2");
populateCode("ex3");
populateCode("ex4");
populateCode("ex5");
populateCode("ex6");
populateCode("ex7");
populateCode("ex8");
populateCode("ex9");
populateCode("ex10");