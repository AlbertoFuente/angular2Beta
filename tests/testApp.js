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
     * Classes
     */

    it('Test app.AppComponent Class', function() {
        expect(typeof this.app.appComponent).toBe('object');
        expect(Object.keys(this.app.appComponent).length).toBe(0);
    });

    it('Test app.FormComponent Class', function() {
        expect(typeof this.app.appFormComponent).toBe('object');
        expect(Object.keys(this.app.appFormComponent).length).toBeGreaterThan(15);
    });

    /**
     * formTitle
     */

    it('Test app.FormComponent.formTitle', function() {
        expect(typeof this.app.appFormComponent.formTitle).toBe('string');
        expect(this.app.appFormComponent.formTitle).toBe('Insert your Personal Data');
    });

    /**
     * form labels
     */

    it('Test app.FormComponent.titleName', function() {
        // titleName
        expect(typeof this.app.appFormComponent.titleName).toBe('string');
        expect(this.app.appFormComponent.titleName).toBe('Insert Your Name');
    });

    it('Test app.FormComponent.titleSurName', function() {
        // titleSurName
        expect(typeof this.app.appFormComponent.titleSurName).toBe('string');
        expect(this.app.appFormComponent.titleSurName).toBe('Insert Your Surname');
    });

    it('Test app.FormComponent.titleAge', function() {
        // titleAge
        expect(typeof this.app.appFormComponent.titleAge).toBe('string');
        expect(this.app.appFormComponent.titleAge).toBe('Insert Your Age');
    });

    it('Test app.FormComponent.titleOccupation', function() {
        // titleOccupation
        expect(typeof this.app.appFormComponent.titleOccupation).toBe('string');
        expect(this.app.appFormComponent.titleOccupation).toBe('Select your occupation');
    });

    it('Test app.FormComponent.submitButtonText', function() {
        // submitButtonText
        expect(typeof this.app.appFormComponent.submitButtonText).toBe('string');
        expect(this.app.appFormComponent.submitButtonText).toBe('Submit');
    });

    /**
     * final labels
     */

    it('Test app.FormComponent.finalTitle', function() {
        // finalTitle
        expect(typeof this.app.appFormComponent.finalTitle).toBe('string');
        expect(this.app.appFormComponent.finalTitle).toBe('You submitted the following:');
    });

    it('Test app.FormComponent.finalName', function() {
        // finalName
        expect(typeof this.app.appFormComponent.finalName).toBe('string');
        expect(this.app.appFormComponent.finalName).toBe('Name');
    });

    it('Test app.FormComponent.finalSurname', function() {
        // finalSurname
        expect(typeof this.app.appFormComponent.finalSurname).toBe('string');
        expect(this.app.appFormComponent.finalSurname).toBe('Surname');
    });

    it('Test app.FormComponent.finalAge', function() {
        // finalAge
        expect(typeof this.app.appFormComponent.finalAge).toBe('string');
        expect(this.app.appFormComponent.finalAge).toBe('Age');
    });

    it('Test app.FormComponent.finalOccupation', function() {
        // finalOccupation
        expect(typeof this.app.appFormComponent.finalOccupation).toBe('string');
        expect(this.app.appFormComponent.finalOccupation).toBe('Occupation');
    });

    it('Test app.FormComponent.editButtonText', function() {
        // editButtonText
        expect(typeof this.app.appFormComponent.editButtonText).toBe('string');
        expect(this.app.appFormComponent.editButtonText).toBe('Edit');
    });

    /**
     * Occupation List
     */

    it('Test app.FormComponent.occupationList', function() {
        var listMock = ['student', 'unemployed', 'employee', 'retired'];
        // occupationList
        expect(typeof this.app.appFormComponent.occupationList).toBe('object');
        expect(this.app.appFormComponent.occupationList).toEqual(listMock);
    });

    /**
     * form user data
     */

    it('Test app.FormComponent.name', function() {
        // name
        expect(typeof this.app.appFormComponent.name).toBe('object');
        expect(this.app.appFormComponent.name).toBe(null);
    });

    it('Test app.FormComponent.surname', function() {
        // surname
        expect(typeof this.app.appFormComponent.surname).toBe('object');
        expect(this.app.appFormComponent.surname).toBe(null);
    });

    it('Test app.FormComponent.age', function() {
        // age
        expect(typeof this.app.appFormComponent.age).toBe('object');
        expect(this.app.appFormComponent.age).toBe(null);
    });

    it('Test app.FormComponent.occupation', function() {
        // occupation
        expect(typeof this.app.appFormComponent.occupation).toBe('object');
        expect(this.app.appFormComponent.occupation).toBe(null);
    });

    /**
     * submit control
     */

    it('Test app.FormComponent.submitControl', function() {
        // submitControl
        expect(typeof this.app.appFormComponent.submitControl).toBe('boolean');
        expect(this.app.appFormComponent.submitControl).toBe(false);
    });

    /**
     * onSubmit method
     */

    it('Test app.FormComponent.onSubmit', function() {
        sinon.spy(this.app.appFormComponent, 'onSubmit');
        // onSubmit
        this.app.appFormComponent.onSubmit();
        expect(this.app.appFormComponent.onSubmit.calledOnce);
        expect(typeof this.app.appFormComponent.submitControl).toBe('boolean');
        expect(this.app.appFormComponent.submitControl).toBe(true);
    });
});
