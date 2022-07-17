# Employee Tracker!
# Table of Contents
1. [Introduction](#introduction)
2. [Application](#application)
3. [Roadmap](#roadmap)
4. [Contributions](#contributions)
5. [Authors](#authors)
6. [License](#license)


## <a id="introduction">Introduction</a>
Employee Tracker is a app that allows you to keep track of your employees, their departments, salaries, and other information about your crew. Using the MySQL database, you can easily add your team's information in and start tracking.

Once you've cloned the repository, open your terminal and enter `npm i` to install all required dependencies. Ensure your credentials are in correctly within the env file for the MySQL database -- you may need to enter your password.

Navigate back to your terminal and enter `mysql -u root -p` to enter the MySQL database. Type `use employees;` to engage the employees database, `quit;` MySQL, and `node index.js` into the application!

## <a id="application">Application</a>
Here is the application in use:

![employeedemo](https://user-images.githubusercontent.com/95983252/179425664-b35e1722-2d23-40cd-bfad-fcd0c33ccf61.gif)

This application requires the following dependencies to run, which are already declared within the package.json file:

* inquirer (^8.2.4)
* mysql (^2.18.1)
* mysql2 (^2.3.3)
* node-modules (^1.0.1)

## <a id="roadmap">Roadmap</a>
Regarding the future of Employee Tracker, the next move is to implement more precise data input, as well as the ability to delete employees, departments, or roles.

## <a id="contributions">Contributions</a>
Please feel free to make a pull request or submit an issue to troubleshoot any bugs you come across.

## <a id="authors">Authors</a>
[Elyse Stanziale](https://github.com/elystanz) is the main contributors and the creators of this application.

## <a id="license">License</a>
This application is protected under the ISC license.

## <a id=#status>Project Status</a>
This application needs some debugging within the index.js regarding the addEmployee function, so attention is being paid to that currently. As well, the database is allowing null data to pass for names of departments which needs to be ironed out.

console.table as a dependency does not work as expected, so it is commented out for the sake of continued functionality.
