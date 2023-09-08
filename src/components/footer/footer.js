import { DivComponent } from "../../common/div-component.js";
import './footer.css'

export class Footer extends DivComponent {


    constructor(parentState) {
        super();
        this.parentState = parentState;
    }

    #prev() {
        const currentOffset = this.parentState.offset;
        if (currentOffset) {
            this.parentState.offset -= this.parentState.numToDisplay;
        }
    }

    #next() {
        const currentOffset = this.parentState.offset;
        const numFound = this.parentState.numFound;
        if (numFound - currentOffset - this.parentState.numToDisplay > 0) {
            this.parentState.offset += this.parentState.numToDisplay;
        }
    }

    #isPrevActive() {
        const currentOffset = this.parentState.offset;
        const isLoading = this.parentState.loading;
        if (currentOffset && !isLoading) {
            return true;        
        }
        return false;
    }

    #isNextActive() {
        const currentOffset = this.parentState.offset;
        const numFound = this.parentState.numFound;
        const isLoading = this.parentState.loading;
        if (numFound - currentOffset - this.parentState.numToDisplay > 0 && !isLoading) {
            return true;
        }
        return false;
    }


    render() {
        this.el.classList.add('footer');
        const isPrevActive = this.#isPrevActive();
        const isNextActive = this.#isNextActive();
        this.el.innerHTML = `
            <button class="prev button ${isPrevActive ? "active" : "inactive"}">
                <img src="/static/arrow-left.svg" alt="Arrow" />
                <div>
                    Prev
                </div>
            </button>
            <button class="next button ${isNextActive ? "active" : "inactive"}">
                <div>
                    Next
                </div>
                <img src="/static/arrow-right.svg" alt="Arrow" />
            </button>
        `;
        this.el.querySelector('button.prev')
                .addEventListener('click', this.#prev.bind(this));
        this.el.querySelector('button.next')
                .addEventListener('click', this.#next.bind(this));
        return this.el;
    }
}