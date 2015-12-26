(function(app) {
    'use strict';

    app.NamesListComponent = ng.core
        .Component({
            selector: 'names-list',
            templateUrl: 'app/names-list-component/namesListComponent.html'
        })
        .Class({
            constructor: function() {
                // name list title
                this.namesListTitle = 'Names List';
                // names list
                this.names = ['Laura', 'Pedro', 'Juan', 'Sandra', 'Pablo'];
                // button text
                this.addNameButton = 'Add Name';
            },
            insertName: function(name) {
                this.names.push(name);
            },
            removeElement: function(name) {
                this.names.shift(name);
            }
        });
}(window.app || (window.app = {})));
