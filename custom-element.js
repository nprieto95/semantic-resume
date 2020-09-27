class CustomElement extends HTMLElement {
    constructor(elementName) {
        super();
        this.attachShadow({ mode: 'open' });
        let xhr = new XMLHttpRequest();
        xhr.open('GET', `${elementName}.html`);
        xhr.responseType = "text";
        xhr.onload = (e) => {
            let template = document.createElement('template');
            template.innerHTML = e.target.response;
            this.shadowRoot.appendChild(template.content.cloneNode(true));
            this.ontemplateappended();
        };
        xhr.send();
    }
    ontemplateappended() { }
}