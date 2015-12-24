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
});
