(function(app) {
    'use strict';

    app.TabsComponent = ng.core
        .Component({
            selector: 'tabs',
            templateUrl: '/app/tabs-component/tabsComponent.html'
        })
        .Class({
            constructor: function() {
                // tabs texts
                this.formText = 'Form Data';
                this.namesListText = 'Names List';
                // app.FormComponent
                this.formComponent = new app.FormComponent();
                // app.NamesListComponent
                this.namesListComponent = new app.NamesListComponent();
                // active tab
                this._isActive = true;
            },
            toggleTab: function() {
                this._isActive = !this._isActive;
                this.formComponent._showForm = !this.formComponent._showForm;
                this.namesListComponent._showNamesList = !this.namesListComponent._showNamesList;
            }
        });
}(window.app || (window.app = {})));
