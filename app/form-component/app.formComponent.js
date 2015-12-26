(function(app) {
    'use strict';

    app.FormComponent = ng.core
        .Component({
            selector: 'form-app',
            templateUrl: '/app/form-component/formComponent.html'
        })
        .Class({
            constructor: function() {
                // Show form
                this._showForm = true;
                // form title
                this.formTitle = 'Insert your Personal Data';
                // form labels
                this.titleName = 'Insert Your Name';
                this.titleSurName = 'Insert Your Surname';
                this.titleAge = 'Insert Your Age';
                this.titleOccupation = "Select your occupation";
                this.submitButtonText = 'Submit';
                // final data labels
                this.finalTitle = 'You submitted the following:';
                this.finalName = 'Name';
                this.finalSurname = 'Surname';
                this.finalAge = 'Age';
                this.finalOccupation = 'Occupation';
                this.editButtonText = 'Edit';
                // user occupation
                this.occupationList = ['student', 'unemployed', 'employee', 'retired'];
                // form user data
                this.name = null;
                this.surname = null;
                this.age = null;
                this.occupation = null;
                // submit Control
                this._submitControl = false;
            },
            setData: function(e, input) {
                this[input] = e.target.value;
            },
            onSubmit: function() {
                this._submitControl = true;
            }
        });
}(window.app || (window.app = {})));
