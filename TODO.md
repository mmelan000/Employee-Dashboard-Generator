# Acceptance Criteria

GIVEN a command-line application that accepts user input

WHEN I am **prompted (inquirer prompt)** for my **team members and their information**
THEN an **HTML file is generated** that **displays a nicely formatted team roster** based on **user input**

WHEN I **click** on an **email address** in the **HTML**
THEN my **default email program (mailto)** opens and populates the TO field of the email with the address

WHEN I **click** on the **GitHub username**
THEN that **GitHub profile opens in a new tab (anchor)**

WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a **menu** with the option to add an **engineer** or an **intern** or to **finish building my team**
- List?
- Engineer
- Intern
- Finish

WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
---

## Assumptions
- All roles are subclasses of Employee
- Employees should go into an array to prevent duplicate email addresses and IDs.