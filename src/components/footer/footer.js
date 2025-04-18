import { DivComponent } from "../../common/div-component";

import './footer.css';

export class Footer extends DivComponent {
    constructor(parentState) {
        super();
        this.parentState = parentState;
    }

    #isPrevActive() {
        const currentOffset = this.parentState.offset;
        const isLoading = this.parentState.isLoading;
        if (currentOffset && !isLoading) {
            return true;
        }
        return false;
    }

    #isNextActive() {
        const currentOffset = this.parentState.offset;
        const numFound = this.parentState.numFound;
        const isLoading = this.parentState.isLoading;
        if (numFound - currentOffset - this.parentState.numToDisplay > 0 && !isLoading) {
            return true;
        }
        return false;
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

    render() {
        console.log(this.#isNextActive());
        this.el.innerHTML = '';
        this.el.classList.add('footer');
        this.el.innerHTML = `
                   <button class="footer-button footer-button__prev ${this.#isPrevActive() ? "" : "footer-button__inactive"}">
                    <img src="/static/arrow-left.svg"/>
                   </button>
                   <button class="footer-button footer-button__next ${this.#isNextActive() ? "" : "footer-button__inactive"}">
                        <img src="/static/arrow-right.svg"/>
                   </button>
        `;
        this.el.querySelector('.footer-button__prev').addEventListener('click', this.#prev.bind(this));
        this.el.querySelector('.footer-button__next').addEventListener('click', this.#next.bind(this));
        // this.el.querySelector('div.footer:nth-child(1)').addEventListener('click', this.#next.bind(this));
        return this.el;
    }
}