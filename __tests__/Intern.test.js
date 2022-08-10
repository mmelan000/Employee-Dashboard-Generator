const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');
const testName = 'Michael Melanson';
const testID = 10017401;
const testEmail = 'm.melanson000@gmail.com';
const testSchool = 'UPENN';
const testIntern = new Intern(testName, testID, testEmail, testSchool);

describe('Intern', () => {
    describe('Initialization', () => {
        it("Should create an empty object.", () => {
            const instanceIntern = new Intern();

            expect(instanceIntern).toEqual({});
        });

        it("Should be a subclass of Employee.", () => {
            const instanceIntern = new Intern();

            expect(instanceIntern).toBeInstanceOf(Employee);
        });
    });

    describe('Data', () => {
        it("Should accept four parameters and store them as 'name', 'id', 'email', and 'school' inside of an object.", () => {
            expect(testIntern).toEqual({
                name: testName,
                id: testID,
                email: testEmail,
                school: testSchool
            });
        });

        it("Should return '.name', as the name that was input.", () => {
            expect(testIntern.name).toEqual(testName);
        });

        it("Should return '.id', as the ID that was input.", () => {
            expect(testIntern.id).toEqual(testID);
        });

        it("Should return '.email', as the email that was input.", () => {
            expect(testIntern.email).toEqual(testEmail);
        });

        it("Should return '.school', as the school that was input.", () => {
            expect(testIntern.school).toEqual(testSchool);
        });
    });

    describe('Functionality', () => {
        it("getRole() should return the title 'Intern'", () => {
            expect(testIntern.getRole()).toEqual('Intern');
        });

        it("getName() should return the name that was input", () => {
            expect(testIntern.getName()).toEqual(testName);
        });

        it("getID() should return the ID that was input.", () => {
            expect(testIntern.getID()).toEqual(testID);
        });

        it("getEmail() should return the email that was input.", () => {
            expect(testIntern.getEmail()).toEqual(testEmail);
        });

        it("getGithub() should return the school name that was input.", () => {
            expect(testIntern.getSchool()).toEqual(testSchool);
        });
    });
});