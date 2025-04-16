import { DivComponent } from "../../common/div-component";

import './card.css';

export class Card extends DivComponent {
    constructor(appState, cardState) {
        super();
        this.appState = appState;
        this.cardState = cardState;
    }

    #addToFavorites() {
        this.appState.favorites.push(this.cardState);
    }

    #deleteFromFavorites() {
        this.appState.favorites = this.appState.favorites.filter(b => b.key !== this.cardState.key);
    }

    render() {
        this.el.classList.add('card');
        const existInFavorites = this.appState.favorites.find(b => b.key == this.cardState.key);
        this.el.innerHTML = `
            <div class="card-image">
                <img src="https://covers.openlibrary.org/b/id/${this.cardState.cover_i}-M.jpg" alt="Обложка"/>
            </div>
            <div class="card-info">
                <div class="card-tag">
                    ${this.cardState.first_publish_year ? this.cardState.first_publish_year : 'Не задано'}
                </div>
                <div class="card-name">
                    ${this.cardState.title}
                </div>
                <div class="card-author">
                    ${this.cardState.author_name ? this.cardState.author_name[0] : 'Не задано'}
                </div>
                <div class="card-footer">
                   <button class="button-add ${existInFavorites ? 'button-add__active' : ''}"}>
                   ${existInFavorites ?
                        '<img src="/static/favorites.svg"/>' :
                        '<img src="/static/favorites-white.svg"/>'
                   }
                   </button>
                </div>
            </div>
        `;

        this.el.querySelector('.button-add')
               .addEventListener('click', 
                    existInFavorites ? this.#deleteFromFavorites.bind(this) : this.#addToFavorites.bind(this)
                );

        return this.el;
    }
}