(function() {
    'use strict'

    describe('Test App', function() {
        beforeEach(function() {
            this.server = sinon.fakeServer.create();
            this.app = {
                appComponent1: new app.AppComponent1(),
                appComponent2: new app.AppComponent2(),
                appComponent3: new app.AppComponent3(),
                appFormComponent: new app.FormComponent(),
                namesListComponent: new app.NamesListComponent(),
                tabsComponent: new app.TabsComponent()
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
            expect(Object.keys(window.app).length).toBe(6);
        });

        /**
         * Classes
         */

        it('Test app.AppComponent1 Class', function() {
            expect(typeof this.app.appComponent1).toBe('object');
            expect(Object.keys(this.app.appComponent1).length).toBe(0);
        });

        it('Test app.AppComponent2 Class', function() {
            expect(typeof this.app.appComponent2).toBe('object');
            expect(Object.keys(this.app.appComponent2).length).toBe(0);
        });

        it('Test app.AppComponent3 Class', function() {
            expect(typeof this.app.appComponent3).toBe('object');
            expect(Object.keys(this.app.appComponent3).length).toBe(0);
        });

        it('Test app.FormComponent Class', function() {
            expect(typeof this.app.appFormComponent).toBe('object');
            expect(Object.keys(this.app.appFormComponent).length).toBeGreaterThan(15);
        });

        it('Test app.NamesListComponent Class', function() {
            expect(typeof this.app.namesListComponent).toBe('object');
            expect(Object.keys(this.app.namesListComponent).length).toBeGreaterThan(0);
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

        it('Test app.FormComponent._submitControl', function() {
            // _submitControl
            expect(typeof this.app.appFormComponent._submitControl).toBe('boolean');
            expect(this.app.appFormComponent._submitControl).toBe(false);
        });

        /**
         * onSubmit method
         */

        it('Test app.FormComponent.onSubmit', function() {
            sinon.spy(this.app.appFormComponent, 'onSubmit');
            // onSubmit
            this.app.appFormComponent.onSubmit();
            expect(this.app.appFormComponent.onSubmit.calledOnce);
            expect(typeof this.app.appFormComponent._submitControl).toBe('boolean');
            expect(this.app.appFormComponent._submitControl).toBe(true);
        });

        /**
         * setData method
         */

        it('Test app.FormComponent.setData', function() {
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

        /**
         * app.NamesListComponent Class
         */

        it('Test app.NamesListComponent.namesListTitle', function() {
            // namesListTitle
            expect(typeof this.app.namesListComponent.namesListTitle).toBe('string');
            expect(this.app.namesListComponent.namesListTitle).toBe('Names List');
        });

        it('Test app.NamesListComponent.names', function() {
            var namesList = ['Laura', 'Pedro', 'Juan', 'Sandra', 'Pablo'];
            // names
            expect(typeof this.app.namesListComponent.names).toBe('object');
            expect(this.app.namesListComponent.names).toEqual(namesList);
        });

        it('Test app.NamesListComponent.addNameButton', function() {
            // addNameButton
            expect(typeof this.app.namesListComponent.addNameButton).toBe('string');
            expect(this.app.namesListComponent.addNameButton).toBe('Add Name');
        });

        it('Test app.NamesListComponent.insertName', function() {
            sinon.spy(this.app.namesListComponent, 'insertName');
            sinon.spy(this.app.namesListComponent, 'checkName');
            var mockNames = ['Laura', 'Pedro', 'Juan', 'Sandra', 'Pablo', 'Ivan'];
            // new name
            this.app.namesListComponent.insertName('Ivan');
            expect(this.app.namesListComponent.insertName.calledOnce);
            expect(this.app.namesListComponent.checkName.calledOnce);
            expect(this.app.namesListComponent.names).toEqual(mockNames);
            // existing name with a capital
            this.app.namesListComponent.insertName('Pablo');
            expect(this.app.namesListComponent.insertName.calledTwice);
            expect(this.app.namesListComponent.checkName.calledTwice);
            expect(this.app.namesListComponent.names).toEqual(mockNames);
            // existing name with lowercase
            this.app.namesListComponent.insertName('pablo');
            expect(this.app.namesListComponent.insertName.calledThrice);
            expect(this.app.namesListComponent.checkName.calledThrice);
            expect(this.app.namesListComponent.names).toEqual(mockNames);
            // empty name
            this.app.namesListComponent.insertName('');
            expect(this.app.namesListComponent.names).toEqual(mockNames);
        });

        it('Test app.NamesListComponent.removeElement', function() {
            sinon.spy(this.app.namesListComponent, 'removeElement');
            var mockNames = ['Pedro', 'Juan', 'Sandra', 'Pablo'];

            this.app.namesListComponent.removeElement('Laura');
            expect(this.app.namesListComponent.removeElement.calledOnce);
            expect(this.app.namesListComponent.names).toEqual(mockNames);
        });

        it('Test app.NamesListComponent.enterKey', function() {
            sinon.spy(this.app.namesListComponent, 'enterKey');
            var mockNames = ['Laura', 'Pedro', 'Juan', 'Sandra', 'Pablo', 'Eva'],
                mockObj = {
                    which: 13,
                    target: {
                        value: 'Eva'
                    }
                };

            this.app.namesListComponent.enterKey(mockObj);
            expect(this.app.namesListComponent.enterKey.calledOnce);
            expect(this.app.namesListComponent.names).toEqual(mockNames);
            expect(mockObj.target.value).toBe(null);
        });

        /**
         * app.TabsComponent
         */

        it('Test app.TabsComponent.formText', function() {
            expect(typeof this.app.tabsComponent.formText).toBe('string');
            expect(this.app.tabsComponent.formText).toBe('Form Data');
        });

        it('Test app.TabsComponent.namesListText', function() {
            expect(typeof this.app.tabsComponent.namesListText).toBe('string');
            expect(this.app.tabsComponent.namesListText).toBe('Names List');
        });

        /**
         * active tab
         */

        it('Test app.TabsComponent._isActive', function() {
            expect(typeof this.app.tabsComponent._isActive).toBe('boolean');
            expect(this.app.tabsComponent._isActive).toBe(true);
        });

        /**
         * toggleTab
         */

        it('Test app.TabsComponent.toggleTab', function() {
            sinon.spy(this.app.tabsComponent, 'toggleTab');

            var formApp = document.createElement('my-app'),
                namesApp = document.createElement('my-app2');

            try {
                this.body.appendChild(formApp);
                this.body.appendChild(namesApp);
            } catch (err) {
                console.log(err);
            } finally {
                // tab empty
                this.app.tabsComponent.toggleTab();
                expect(this.app.tabsComponent.toggleTab.calledOnce);
                expect(this.app.tabsComponent._isActive).toBe(false);
                expect(namesApp.className).toBe('hideApp');
                expect(formApp.className).toBe('showApp');
                // tab 1
                this.app.tabsComponent.toggleTab(1);
                expect(this.app.tabsComponent.toggleTab.calledTwice);
                expect(this.app.tabsComponent._isActive).toBe(true);
                expect(namesApp.className).toBe('hideApp');
                expect(formApp.className).toBe('showApp');
                // tab 2
                this.app.tabsComponent.toggleTab(2);
                expect(this.app.tabsComponent.toggleTab.calledThrice);
                expect(this.app.tabsComponent._isActive).toBe(false);
                expect(namesApp.className).toBe('showApp');
                expect(formApp.className).toBe('hideApp');
            }
        });
    });
}());
