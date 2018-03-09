# ScrumTasksPlanner

Simple application which allows to managing tasks in projects (Add, Edit, Delete). 
Tasks and Users are assign to current project. Application also has Sign In and Sign Up module,
its divided on client site, written in React-native and Redux and server site written with express.js.
Server save data to database (mongodb and mongoose). Db.json file had been using to mock server using json-server.

Technologies used: React-Native, Redux, axios, express, mongodb, mongoose, moment, jest, enzyme.


## Run application

If you run this project first time, you must install required dependencies form repository.
For this type in console:
For app:
In main project folder
```
npm install
```
To run app in IOS simulator:
```
react-native run-ios
```

For server:
In server folder
```
npm install
```
To run server:
```
npm start
```

also you should run mongodb and establish connection

