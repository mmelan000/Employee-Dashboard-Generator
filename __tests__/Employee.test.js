const Employee = require('../lib/Employee.js');
const testName = 'Ravenloft';
const testID = 'ABC1234';
const testEmail = 'email@email.com';
const testEmployee = new Employee(testName, testID, testEmail)

describe('Employee', () => {
    describe('Initialization', () => {
        it("Should create an empty object.", () => {
            const testEmployee = new Employee();

            expect(testEmployee).toEqual({});
        });
    });

    describe('Data', () => {
        it("Should accept three parameters and store them as 'name', 'id', and 'email' inside of an object.", () => {
            expect(testEmployee).toEqual({
                name: testName,
                id: testID,
                email: testEmail
            });
        });

        it("Should return '.name', as the name that was input.", () => {
            expect(testEmployee.name).toEqual(testName);
        });

        it("Should return '.id', as the ID that was input.", () => {
            expect(testEmployee.id).toEqual(testID);
        });

        it("Should return '.email', as the email that was input.", () => {
            expect(testEmployee.email).toEqual(testEmail);
        });
    });

    describe('Functionality', () => {
        it("getRole() should return the title 'Employee'", () => {
            expect(testEmployee.getRole()).toEqual('Employee');
        });

        it("getName() should return the name that was input", () => {
            expect(testEmployee.getName()).toEqual(testName);
        });

        it("getID() should return the ID that was input.", () => {
            expect(testEmployee.getID()).toEqual(testID);
        });

        it("getEmail() should return the email that was input.", () => {
            expect(testEmployee.getEmail()).toEqual(testEmail);
        });
    });
});