(function(app) {
    app.AppComponent = ng.core
        .Component({
            selector: 'my-app',
            template: `
            <!-- Your Name -->
                <h2>Change your Name</h2>
                <input #cmn>
                <button (click)="changeMyName(cmn.value)">Change Your Name</button>
                <h2>My name is {{ myName }}</h2>
            <!-- End Your Name -->
            <!-- Names List -->
                <p>Names list: </p>
                <ul>
                    <li *ngFor="#name of names">
                    <p (click)="changeMyName(name)">{{ name }}</p>
                    </li>
                </ul>
                <h2>Add more names: </h2>
                <input #addName>
                <button (click)="addNames(addName.value)">Add Name</button>
            <!-- End Names List -->
            `
        })
        .Class({
            constructor: function() {
                this.myName = 'Alberto';
                this.names = ['Pedro', 'Juan', 'María', 'Mario', 'Carlos'];
            },
            addNames: function(n) {
                this.names.push(n);
            },
            changeMyName: function(n) {
                this.myName = n;
            }
        });
}(window.app || (window.app = {})));
