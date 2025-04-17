import { DivComponent } from "../../common/div-component";

import './footer.css';

export class Footer extends DivComponent {
    constructor(parentState) {
        super();
        this.parentState = parentState;
    }

    render() {
        this.el.innerHTML = '';
        this.el.classList.add('footer');
        this.el.innerHTML = `
                   <button class="footer-button"}>
                    <img src="/static/arrow-left.svg"/>
                   </button>
                   <button class="footer-button"}>
                        <img src="/static/arrow-right.svg"/>
                   </button>
        `;
        return this.el;
    }
}