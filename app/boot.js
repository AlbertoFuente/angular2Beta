(function(app) {
    document.addEventListener('DOMContentLoaded', function() {
        ng.platform.browser.bootstrap(app.FormComponent);
        ng.platform.browser.bootstrap(app.AppComponent);
    });
})(window.app || (window.app = {}));
