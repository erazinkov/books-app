import { DivComponent } from "../../common/div-component";

import './header.css';

export class Header extends DivComponent {
    constructor(appState) {
        super();
        this.appState = appState;
    }

    render() {
        this.el.innerHTML = '';
        this.el.classList.add('header');
        this.el.innerHTML = `
            <div>
                <img src="/static/logo.svg" alt="Логотип" />
            </div>
            <div class="menu">
                <a class="menu-item" href="#">
                    <img src="/static/search.svg" alt="Поиск книг" />
                    Поиск книг
                </a>    
                <a class="menu-item" href="#favorites">
                    <img src="/static/favorites.svg"; alt="Избранное" />
                    Избранное
                    <div class="menu-counter">${this.appState.favorites.length}</div>
                </a>
            </div>
        `;
        return this.el;
    }
}