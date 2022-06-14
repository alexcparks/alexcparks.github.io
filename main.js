class myFoot extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
		        
        `
    }
}

customElements.define('foot', myFoot)