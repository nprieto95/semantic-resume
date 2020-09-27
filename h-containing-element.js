class HContainingElement extends CustomElement{
    constructor(elementName) {
        super(elementName);
    }
    get hLevel(){
        return this.getAttribute('h-level');
    }
    ontemplateappended(){
        let parsedHLevel = parseInt(this.hLevel);
        let h1s = this.shadowRoot.querySelectorAll('h1');
        h1s.forEach(element => {
            element.classList.add(`h${parsedHLevel}`);
        });
        let h2s = this.shadowRoot.querySelectorAll('h2');
        h2s.forEach(element => {
            element.classList.add(`h${parsedHLevel + 1}`);
        });
    }
}