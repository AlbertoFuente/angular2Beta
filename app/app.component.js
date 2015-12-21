(function(app) {
    app.AppComponent = ng.core
        .Component({
            selector: 'my-app',
            template: `
            <h2>My name is {{ myName }}</h2>
            <p>Names list: </p>
            <ul>
                <li *ngFor="#name of names">
                {{ name }}
                </li>
            </ul>
            `
        })
        .Class({
            constructor: function() {
                this.myName = 'Alberto';
                this.names = ['Pedro', 'Juan', 'María', 'Mario', 'Carlos'];
            }
        });
})(window.app || (window.app = {}));
