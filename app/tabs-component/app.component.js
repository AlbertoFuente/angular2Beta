(function() {
    'use strict';

    app.AppComponent3 = ng.core
        .Component({
            selector: 'tabs-app',
            template: '<tabs></tabs>',
            directives: [app.TabsComponent]
        })
        .Class({
            constructor: function() {}
        });
}(window.app || (window.app = {})));
