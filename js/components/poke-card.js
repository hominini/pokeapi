class PokeCard extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();

        // Create a shadow root
        this.attachShadow({ mode: 'open' }); // sets and returns 'this.shadowRoot'

        // Create (nested) span elements***
        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'wrapper');

        // Insert image
        let imgUrl;
        if (this.hasAttribute('img')) {
            imgUrl = this.getAttribute('img');
        } else {
            imgUrl = 'img/default.png';
        }

        const img = document.createElement('img');
        img.src = imgUrl;
        img.setAttribute('class', 'img-card-pokemon');
        wrapper.appendChild(img)

        // Create some CSS to apply to the shadow dom
        const style = document.createElement('style');
        style.textContent = `
        .wrapper {
            background: #f08030;
            width: 100%;
            padding: 10px;
          }
        .img-card-pokemon {
            width: 100%;
        }
        `;

        // attach the created elements to the shadow DOM
        this.shadowRoot.append(style, wrapper);
        shadow.appendChild(style);
        console.log(style.isConnected);
        shadow.appendChild(wrapper);
        wrapper.appendChild(icon);
        wrapper.appendChild(info);
    }
}

customElements.define('poke-card', PokeCard);
