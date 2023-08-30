import { DivComponent } from "../../common/div-component";
import { Loader } from "../loader/loader.js";
import './cardlist.css';

export class CardList extends DivComponent {
    constructor(appState, parentState) {
        super();
        this.appState = appState;
        this.parentState = parentState;
    }
    render() {
        this.el.classList.add('card_list');
        if (this.parentState.loading) {
            // this.el.innerHTML = `
            //     <div class="card_list__loader">
            //         Processing...
            //     </div>
            // `;
            this.el = new Loader().render();
            return this.el;
        }
        this.el.innerHTML = `
        <h1>
        Found - ${this.parentState.list.length}
        </h1>
        `;
        return this.el;
    }
}