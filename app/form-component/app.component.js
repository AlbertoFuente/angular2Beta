(function(app) {
    'use strict';

    app.AppComponent1 = ng.core
        .Component({
            selector: 'my-app',
            template: '<form-app></form-app>',
            directives: [app.FormComponent]
        })
        .Class({
            constructor: function() {}
        });
}(window.app || (window.app = {})));
