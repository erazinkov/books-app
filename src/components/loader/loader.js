import { DivComponent } from "../../common/div-component";
import './loader.css';

export class Loader extends DivComponent {
    constructor() {
        super();
    }
    render() {
        this.el.classList.add('loader');
        this.el.innerHTML = `
            <div class="loader__ring"></div>
        `;
        return this.el;
    }
}