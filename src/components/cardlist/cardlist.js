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
        const cardGrid = document.createElement('div');
        cardGrid.classList.add('card_grid');
        for (const card of this.parentState.list) {
            cardGrid.append(new Card(this.appState, card).render());
        }
        this.el.append(cardGrid);

        return this.el;
    }
}