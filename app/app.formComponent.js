(function(app) {
    app.FormComponent = ng.core
        .Component({
            selector: 'my-form',
            template: `
            <!-- Form Title -->
            <h2>{{ formTitle }}</h2>
            <!-- Form -->
            <form name="userForm">
            <md-content md-theme="docs-dark" layout-gt-sm="row" layout-padding>
            <!-- USER NAME -->
                <md-input-container>
                    <label>{{ titleName }}</label>
                    <input ng-model="user.name" required md-maxlength="30" name="name">
                    <div ng-messages="userForm.name.$error">
                      <div ng-message="required">This is required.</div>
                      <div ng-message="md-maxlength">The name has to be less than 30 characters long.</div>
                    </div>
                </md-input-container>
            <!-- USER SURNAME -->
                <md-input-container>
                    <label>{{ titleSurName }}</label>
                    <input ng-model="user.surname" required name="surname">
                    <div ng-messages="userForm.surName.$error">
                      <div ng-message="required">This is required.</div>
                    </div>
                </md-input-container>
            <!-- USER AGE -->
                <md-input-container>
                    <label>{{ titleAge }}</label>
                    <input ng-model="user.age" required name="age">
                    <div ng-messages="userForm.age.$error">
                      <div ng-message="required">This is required.</div>
                    </div>
                </md-input-container>
            <!-- USER OCCUPATION -->
            <select (change)="setOccupation($event)">
              <option *ngFor="#oc of occupation" [value]="oc">{{ oc }}</option>
            </select>
            </md-content>
            </form>
        `
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
            }
        });
}(window.app || (window.app = {})));
