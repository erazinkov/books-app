import { DivComponent } from "../../common/div-component"
import './cardlist.css'

export class CardList extends DivComponent {
    constructor(state) {
        super();
        this.state = state;
        console.log(this.state.list.length);
    }
    render() {
        this.el.classList.add('cardlist');
        if (this.state.loading) {
            this.el.innerHTML = `
                <div>
                    <div>
                        Processing...
                    </div>
                </div>
            `;
            return this.el;
        }
        this.el.innerHTML = `
            <div>
                <div>
                    Found - ${this.state.list.length}
                </div>
            </div>
        `;
        return this.el;
    }
}