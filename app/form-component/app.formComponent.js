(function(app) {
    'use strict';
    app.FormComponent = ng.core
        .Component({
            selector: 'form-app',
            templateUrl: '/app/form-component/formTemplate.html'
        })
        .Class({
            constructor: function() {
                // form titles
                this.formTitle = 'Insert your Personal Data';
                this.titleName = 'Insert Your Name';
                this.titleSurName = 'Insert Your Surname';
                this.titleAge = 'Insert Your Age';
                // user occupation
                this.occupation = ['student', 'employee', 'retired'];
                // form user data
                this.name = userForm.name.value || 'empty';
                this.surname = userForm.surname.value || 'empty';
                this.age = userForm.age.value || 'empty';
                this.userOccupation = 'empty';
            },
            setOccupation: function(e) {
                this.userOccupation = e.target.value;
            },
            getOccupation: function() {
                return this.userOccupation;
            }
        });
}(window.app || (window.app = {})));
