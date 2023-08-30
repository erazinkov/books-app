import { DivComponent } from "../../common/div-component";
import { Card } from "../card/card";
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
            this.el.append(new Loader().render());
            return this.el;
        }
        this.el.innerHTML = `
        <h1>
            Found - ${this.parentState.numFound}
        </h1>
        `;
        for (const card of this.parentState.list) {
            this.el.append(new Card(this.appState, card).render());
        }
        return this.el;
    }
}