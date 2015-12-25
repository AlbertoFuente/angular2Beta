(function() {
    'use strict'

    describe('Test App', function() {
        beforeEach(function() {
            this.server = sinon.fakeServer.create();
            this.app = {
                appComponent: new app.AppComponent(),
                appFormComponent: new app.FormComponent()
            };
            this.body = window.document.body;
        });
        afterEach(function() {
            this.server.restore();
            this.app = null;
            this.body = null;
        });

        /**
         * Test window.app
         */

        it('Test window.app', function() {
            expect(typeof window.app).toBe('object');
            expect(Object.keys(window.app).length).toBe(2);
        });

        /**
         * Classes
         */

        it('Test app.AppComponent Class', function() {
            expect(typeof this.app.appComponent).toBe('object');
            expect(Object.keys(this.app.appComponent).length).toBe(0);
        });

        it('Test app.appFormComponent Class', function() {
            expect(typeof this.app.appFormComponent).toBe('object');
            expect(Object.keys(this.app.appFormComponent).length).toBeGreaterThan(15);
        });

        /**
         * formTitle
         */

        it('Test app.appFormComponent.formTitle', function() {
            expect(typeof this.app.appFormComponent.formTitle).toBe('string');
            expect(this.app.appFormComponent.formTitle).toBe('Insert your Personal Data');
        });

        /**
         * form labels
         */

        it('Test app.appFormComponent.titleName', function() {
            // titleName
            expect(typeof this.app.appFormComponent.titleName).toBe('string');
            expect(this.app.appFormComponent.titleName).toBe('Insert Your Name');
        });

        it('Test app.appFormComponent.titleSurName', function() {
            // titleSurName
            expect(typeof this.app.appFormComponent.titleSurName).toBe('string');
            expect(this.app.appFormComponent.titleSurName).toBe('Insert Your Surname');
        });

        it('Test app.appFormComponent.titleAge', function() {
            // titleAge
            expect(typeof this.app.appFormComponent.titleAge).toBe('string');
            expect(this.app.appFormComponent.titleAge).toBe('Insert Your Age');
        });

        it('Test app.appFormComponent.titleOccupation', function() {
            // titleOccupation
            expect(typeof this.app.appFormComponent.titleOccupation).toBe('string');
            expect(this.app.appFormComponent.titleOccupation).toBe('Select your occupation');
        });

        it('Test app.appFormComponent.submitButtonText', function() {
            // submitButtonText
            expect(typeof this.app.appFormComponent.submitButtonText).toBe('string');
            expect(this.app.appFormComponent.submitButtonText).toBe('Submit');
        });

        /**
         * final labels
         */

        it('Test app.appFormComponent.finalTitle', function() {
            // finalTitle
            expect(typeof this.app.appFormComponent.finalTitle).toBe('string');
            expect(this.app.appFormComponent.finalTitle).toBe('You submitted the following:');
        });

        it('Test app.appFormComponent.finalName', function() {
            // finalName
            expect(typeof this.app.appFormComponent.finalName).toBe('string');
            expect(this.app.appFormComponent.finalName).toBe('Name');
        });

        it('Test app.appFormComponent.finalSurname', function() {
            // finalSurname
            expect(typeof this.app.appFormComponent.finalSurname).toBe('string');
            expect(this.app.appFormComponent.finalSurname).toBe('Surname');
        });

        it('Test app.appFormComponent.finalAge', function() {
            // finalAge
            expect(typeof this.app.appFormComponent.finalAge).toBe('string');
            expect(this.app.appFormComponent.finalAge).toBe('Age');
        });

        it('Test app.appFormComponent.finalOccupation', function() {
            // finalOccupation
            expect(typeof this.app.appFormComponent.finalOccupation).toBe('string');
            expect(this.app.appFormComponent.finalOccupation).toBe('Occupation');
        });

        it('Test app.appFormComponent.editButtonText', function() {
            // editButtonText
            expect(typeof this.app.appFormComponent.editButtonText).toBe('string');
            expect(this.app.appFormComponent.editButtonText).toBe('Edit');
        });

        /**
         * Occupation List
         */

        it('Test app.appFormComponent.occupationList', function() {
            var listMock = ['student', 'unemployed', 'employee', 'retired'];
            // occupationList
            expect(typeof this.app.appFormComponent.occupationList).toBe('object');
            expect(this.app.appFormComponent.occupationList).toEqual(listMock);
        });

        /**
         * form user data
         */

        it('Test app.appFormComponent.name', function() {
            // name
            expect(typeof this.app.appFormComponent.name).toBe('object');
            expect(this.app.appFormComponent.name).toBe(null);
        });

        it('Test app.appFormComponent.surname', function() {
            // surname
            expect(typeof this.app.appFormComponent.surname).toBe('object');
            expect(this.app.appFormComponent.surname).toBe(null);
        });

        it('Test app.appFormComponent.age', function() {
            // age
            expect(typeof this.app.appFormComponent.age).toBe('object');
            expect(this.app.appFormComponent.age).toBe(null);
        });

        it('Test app.appFormComponent.occupation', function() {
            // occupation
            expect(typeof this.app.appFormComponent.occupation).toBe('object');
            expect(this.app.appFormComponent.occupation).toBe(null);
        });

        /**
         * submit control
         */

        it('Test app.appFormComponent.submitControl', function() {
            // submitControl
            expect(typeof this.app.appFormComponent.submitControl).toBe('boolean');
            expect(this.app.appFormComponent.submitControl).toBe(false);
        });

        /**
         * onSubmit method
         */

        it('Test app.appFormComponent.onSubmit', function() {
            sinon.spy(this.app.appFormComponent, 'onSubmit');
            // onSubmit
            this.app.appFormComponent.onSubmit();
            expect(this.app.appFormComponent.onSubmit.calledOnce);
            expect(typeof this.app.appFormComponent.submitControl).toBe('boolean');
            expect(this.app.appFormComponent.submitControl).toBe(true);
        });

        /**
         * setData method
         */

        it('Test app.appFormComponent.setData', function() {
            sinon.spy(this.app.appFormComponent, 'setData');
            // setData
            var mockObject = {
                target: {
                    value: 'user-name'
                }
            };
            this.app.appFormComponent.setData(mockObject, 'name');
            expect(this.app.appFormComponent.setData.calledOnce);
            expect(this.app.appFormComponent.name).toBe('user-name');
        });
    });
}());
