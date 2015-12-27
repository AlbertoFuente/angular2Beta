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
            toggleTab: function(num) {
                this._isActive = !this._isActive;

                let formApp = document.querySelector('my-app'),
                    namesApp = document.querySelector('my-app2');
                switch (num) {
                    case 1:
                        formApp.style.display = 'block';
                        namesApp.style.display = 'none';
                        break;
                    case 2:
                        formApp.style.display = 'none';
                        namesApp.style.display = 'block';
                        break;
                }
            }
        });
}(window.app || (window.app = {})));
