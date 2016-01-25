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
                // active tab
                this._isActive = true;
            },
            toggleTab: function(num) {
                this._isActive = !this._isActive;

                let formApp = document.querySelector('my-app'),
                    namesApp = document.querySelector('my-app2'),
                    tabObj = {
                        1: () => {
                            formApp.className = 'showApp';
                            namesApp.className = 'hideApp';
                        },
                        2: () => {
                            formApp.className = 'hideApp';
                            namesApp.className = 'showApp';
                        }
                    }
                if (num) {
                    tabObj[num]();
                } else {
                    tabObj[1]();
                }
            }
        });
}(window.app || (window.app = {})));
