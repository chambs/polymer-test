class MyElement extends HTMLElement {
  constructor() {
    super();

    this.init();

  }

  init () {
    // this.style.width = '300px';
    // this.style.height = '200px';
    // this.style.backgroundColor = '#bbb';
    console.log('yay');
  }
}

customElements.define('my-element', MyElement);