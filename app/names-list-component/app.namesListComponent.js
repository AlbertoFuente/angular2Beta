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
            checkName: function(name) {
                return this.names.findIndex(x => x.toLowerCase() === name.toLowerCase());
            },
            insertName: function(name) {
                let _name = this.checkName(name);
                if (_name < 0) {
                    this.names.push(name);
                } else {
                    return false;
                }
            },
            removeElement: function(name) {
                this.names.shift(name);
            }
        });
}(window.app || (window.app = {})));
