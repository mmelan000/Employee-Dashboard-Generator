const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const testName = 'Michael Melanson';
const testID = 10017401;
const testEmail = 'm.melanson000@gmail.com';
const testNumber = '(267) 559-6182';
const testManager = new Manager(testName, testID, testEmail, testNumber);

describe('Manager', () => {
    describe('Initialization', () => {
        it("Should create an empty object.", () => {
            const instanceManager = new Manager();

            expect(instanceManager).toEqual({});
        });

        it("Should be a subclass of Employee.", () => {
            const instanceManager = new Manager();

            expect(instanceManager).toBeInstanceOf(Employee);
        });
    });

    describe('Data', () => {
        it("Should accept four parameters and store them as 'name', 'id', 'email', and 'officeNumber' inside of an object.", () => {
            expect(testManager).toEqual({
                name: testName,
                id: testID,
                email: testEmail,
                officeNumber: testNumber
            });
        });

        it("Should return '.name', as the name that was input.", () => {
            expect(testManager.name).toEqual(testName);
        });

        it("Should return '.id', as the ID that was input.", () => {
            expect(testManager.id).toEqual(testID);
        });

        it("Should return '.email', as the email that was input.", () => {
            expect(testManager.email).toEqual(testEmail);
        });

        it("Should return '.officeNumber', as the email that was input.", () => {
            expect(testManager.officeNumber).toEqual(testNumber);
        });
    });

    describe('Functionality', () => {
        it("getRole() should return the title 'Manager'", () => {
            expect(testManager.getRole()).toEqual('Manager');
        });

        it("getName() should return the name that was input", () => {
            expect(testManager.getName()).toEqual(testName);
        });

        it("getID() should return the ID that was input.", () => {
            expect(testManager.getID()).toEqual(testID);
        });

        it("getEmail() should return the email that was input.", () => {
            expect(testManager.getEmail()).toEqual(testEmail);
        });
    });
});