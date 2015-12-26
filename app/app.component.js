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

(function(app) {
    'use strict';

    app.AppComponent = ng.core
        .Component({
            selector: 'my-app',
            template: '<form-app></form-app>',
            directives: [app.FormComponent]
        })
        .Class({
            constructor: function() {}
        });
}(window.app || (window.app = {})));

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
