# e-commerce-framework
An e-commerce site prototype

---

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| JavaScript     | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)      |   
| Git | [https://git-scm.com/](https://git-scm.com/)     |    
| Node.js | [https://nodejs.org/](https://nodejs.org/)     |
| Sequelize | [https://sequelize.org/](https://sequelize.org/)  |
| NPM | [https://www.npmjs.com](https://www.npmjs.com)   |

---

## Badges
![Static Badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Static Badge](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Static Badge](https://img.shields.io/badge/License-MIT_License-blue)
![Static Badge](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

---

## Description

[Watch the video describing how to use the app](https://watch.screencastify.com/v/YRnlxpdC2O0OIwk1gkx7)

[Visit the Github repository](https://github.com/Jeffreydne/logoMakerSVG)

This application alows a user to create and delete notes and store them in the cloud.  

---

## Instalation

Prior to using the app please see the video for complete instructions.This application requires the npm modules express, dotenv, mysql2 & sequelize. You will need to type "npm i" to do this. You will need to use mysql to create the database, then you will need to quit mysql and then type "node ./seeds/index.js" in the command line to seed the database before running this app by typeing "npm start". 

---

## Usage

This website is designed as an example of the back end of an APP that communicates with a database. A user can seed a database from th commnad line then use the insomnia app to make GET, POST, PUT and DELETE fetch requests to the database, simulating a frontend website.  


---

## Learning Points

A significant portion of code was provided as starter code. I developed the backend functionality to allow the site to work for users. 

* the dotenv npm package was used to load environmental variables from my .env file into the process.env object, allowing the variables to remain private

*  Fetch requests are made using the get, post, put and delete methods to provide functionlity. The sequelize and mysql2 npm packages were used to allow communication between my app and the database for each of these requests. 

*  A routes folder was used so that individual api routes were handled in this folder while server.js handled the basic setup and is used to run the app. 

* Insomnia wa used to make the requests to the app and MySQL Workbench was used to check on the progress of each reuest

*  screencastify was used to make a video describing how to use my app

---

## Author Info

### Jeffrey Nelson


* [Portfolio](https://jeffreydne.github.io/Jeff-Nelson-Portfolio/)
* [LinkedIn](https://www.linkedin.com/in/jeffrey-nelson13/)
* [Github](https://github.com/Jeffreydne)

---
## Credits

 The excellent staff at UC Berkeley Extension Full Stack Bootcamp provided starter files and recommended the basic file structure. Some files were provided in complete form, others needed significant additions to make the app work. I also borrowed heavily from the unit 13 activities at the UC Berkeley code camp, in order to implement the code & make the back end function. Finally, I copied open source badges from Vedant Chainani at the website https://dev.to/envoy_/150-badges-for-github-pnk#contents 
 
---

## License

MIT License

---
