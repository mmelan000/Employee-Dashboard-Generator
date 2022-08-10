const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const testName = 'Michael Melanson';
const testID = 10017401;
const testEmail = 'm.melanson000@gmail.com';
const testGithub = '(267) 559-6182';
const testEngineer = new Engineer(testName, testID, testEmail, testGithub);

describe('Engineer', () => {
    describe('Initialization', () => {
        it("Should create an empty object.", () => {
            const instanceEngineer = new Engineer();

            expect(instanceEngineer).toEqual({});
        });

        it("Should be a subclass of Employee.", () => {
            const instanceEngineer = new Engineer();

            expect(instanceEngineer).toBeInstanceOf(Employee);
        });
    });

    describe('Data', () => {
        it("Should accept four parameters and store them as 'name', 'id', 'email', and 'github' inside of an object.", () => {
            expect(testEngineer).toEqual({
                name: testName,
                id: testID,
                email: testEmail,
                github: testGithub
            });
        });

        it("Should return '.name', as the name that was input.", () => {
            expect(testEngineer.name).toEqual(testName);
        });

        it("Should return '.id', as the ID that was input.", () => {
            expect(testEngineer.id).toEqual(testID);
        });

        it("Should return '.email', as the email that was input.", () => {
            expect(testEngineer.email).toEqual(testEmail);
        });

        it("Should return '.github', as the email that was input.", () => {
            expect(testEngineer.github).toEqual(testGithub);
        });
    });

    describe('Functionality', () => {
        it("getRole() should return the title 'Engineer'", () => {
            expect(testEngineer.getRole()).toEqual('Engineer');
        });

        it("getName() should return the name that was input", () => {
            expect(testEngineer.getName()).toEqual(testName);
        });

        it("getID() should return the ID that was input.", () => {
            expect(testEngineer.getID()).toEqual(testID);
        });

        it("getEmail() should return the email that was input.", () => {
            expect(testEngineer.getEmail()).toEqual(testEmail);
        });

        it("getGithub() should return the Github username that was input.", () => {
            expect(testEngineer.getGithub()).toEqual(testGithub);
        });
    });
});