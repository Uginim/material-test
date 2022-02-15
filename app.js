class RedblueTogglePrototype {
    get toggled() {
      return this.root.getAttribute('aria-pressed') === 'true';
    }
    
    set toggled(toggled) {
      const toggleColorEl = this.root.querySelector('.redblue-toggle__color');
      this.root.setAttribute('aria-pressed', String(toggled));
      
      let toggleColor;
      if (toggled) {
        toggleColor = 'Red';
        this.root.classList.add('redblue-toggle--toggled');
      } else {
        toggleColor = 'Blue';
        this.root.classList.remove('redblue-toggle--toggled');
      }
      toggleColorEl.textContent = toggleColor;
    }
    
    constructor(root) {
      this.root = root;
      this.clickHandler_ = () => this.toggle();
      this.initialize();
    }
    
    initialize() {
      this.root.addEventListener('click', this.clickHandler_);
    }
    
    destroy() {
      this.root.removeEventListener('click', this.clickHandler_);
    }
    
    toggle() {
      this.toggled = !this.toggled;
    }
  }
  
  new RedblueTogglePrototype(document.querySelector('.redblue-toggle'));