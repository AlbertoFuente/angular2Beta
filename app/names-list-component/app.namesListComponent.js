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
                return (this.checkName(name) < 0 && name !== '') ? this.names[this.names.length] = name : false;
            },
            removeElement: function(name) {
                this.names.shift(name);
            },
            enterKey: function($event) {
                if ($event.which === 13) {
                    this.insertName($event.target.value);
                    $event.target.value = null;
                }
            }
        });
}(window.app || (window.app = {})));
