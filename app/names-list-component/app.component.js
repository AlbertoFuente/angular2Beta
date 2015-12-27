(function() {
    'use strict';

    app.AppComponent2 = ng.core
        .Component({
            selector: 'my-app2',
            template: '<names-list></names-list>',
            directives: [app.NamesListComponent]
        })
        .Class({
            constructor: function() {}
        });
}(window.app || (window.app = {})));
