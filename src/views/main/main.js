import { AbstractView } from "../../common/view.js";
import onChange from 'on-change';
import { Header } from '../../components/header/header.js';
import { Search } from "../../components/search/search.js";

export class MainView extends AbstractView {
    state = {
        list: [],
        loading: false,
        searchQuery: undefined,
        offset: 0,
    };

    constructor(appState) {
        super();
        this.appState = appState;
        this.appState = onChange(this.appState, this.appStateHook.bind(this));
        this.state = onChange(this.state, this.stateHook.bind(this));
        this.setTitle('Поиск книг');
    }

    appStateHook (path) {
        if (path === 'favorites') {
            console.log('favorites');   
        }
    }

    stateHook (path) {
        console.log(path);   
        if (path === 'searchQuery') {
            console.log('searchQuery');   
        }
    }

    render() {
        const main = document.createElement('div');
        main.append(new Search(this.appState).render());
        this.app.innerHTML = '';
        this.app.append(main);
        this.renderHeader();
    }

    renderHeader() {
        const header = new Header(this.appState).render();
        this.app.prepend(header);
    }


}