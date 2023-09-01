import { DivComponent } from "../../common/div-component.js";
import './footer.css'

export class Footer extends DivComponent {
    constructor(appState) {
        super();
        this.appState = appState;
    }

    #prev() {
        const currentOffset = this.appState.offset;
        console.log(currentOffset);
        this.appState.offset -= 6;
    }

    #next() {
        const currentOffset = this.appState.offset;
        console.log(currentOffset);
        // const numFound = this.appState.numFound;
        this.appState.offset += 6;
    }

    render() {
        this.el.classList.add('footer');
        this.el.innerHTML = `
            <button class="prev">Prev</button>
            <button class="next">Next</button>
        `;
        this.el.querySelector('button.prev')
                .addEventListener('click', this.#prev.bind(this));
        this.el.querySelector('button.next')
                .addEventListener('click', this.#next.bind(this));
        return this.el;
    }
}