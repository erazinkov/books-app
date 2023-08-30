import { DivComponent } from "../../common/div-component";
import './loader.css';

export class Loader extends DivComponent {
    constructor() {
        super();
    }
    render() {
        this.el.classList.add('lds-dual-ring');
        this.el.innerHTML = `
            <div></div>
        `;
        return this.el;
    }
}