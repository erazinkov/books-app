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
            this.el.append(new Loader().render());
            return this.el;
        }
        const cardGrid = document.createElement('div');
        cardGrid.classList.add('card_grid');
        let currentCardNumber = 0;
        const maxCardNumber = this.parentState.numToDisplay;
        for (const card of this.parentState.list) {
            if (++currentCardNumber > maxCardNumber) break;
            cardGrid.append(new Card(this.appState, card).render());
        }
        this.el.append(cardGrid);
        return this.el;
    }
}