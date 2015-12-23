(function(app) {
    'use strict';

    app.FormComponent = ng.core
        .Component({
            selector: 'form-app',
            templateUrl: '/app/form-component/formComponent.html'
        })
        .Class({
            constructor: function() {
                // form title
                this.formTitle = 'Insert your Personal Data';
                // form labels
                this.titleName = 'Insert Your Name';
                this.titleSurName = 'Insert Your Surname';
                this.titleAge = 'Insert Your Age';
                this.titleOccupation = "Select your occupation";
                this.submitButtonText = 'Submit';
                // final data
                this.finalTitle = 'You submitted the following:';
                this.finalName = 'Name';
                this.finalSurname = 'Surname';
                this.finalAge = 'Age';
                this.finalOccupation = 'Occupation';
                this.editButtonText = 'Edit';
                // user occupation
                this.occupation = ['student', 'unemployed', 'employee', 'retired'];
                // form user data
                this.name = '';
                this.surname = '';
                this.age = '';
                this.userOccupation = '';
                // submit Control
                this.submitControl = false;
            },
            setData: function(e, input) {
                this[input] = e.target.value;
            },
            setOccupation: function(e) {
                this.userOccupation = e.target.value;
            },
            onSubmit: function() {
                this.submitControl = true;
            }
        });
}(window.app || (window.app = {})));
