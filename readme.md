# Social media integration
This project demonstrates social media auth integration using passport authentication and stores data in the mongoDB database.
## Getting Started
* Installation
```properties
    npm install
``` 
* Run mongoDB from console
 ```properties
    mongod
```
* Run project
```properties
    npm run dev
```
* Open browser then go to http://localhost:3000/profile

## File Structure

* MVC style architecture.
* Server.js is entry point to the app.
*  routes folder contains all possible end points
* controller holds the business logic.
* Swagger and login services has been segregated to maintain the clean code.
* database integration is in db.
* .env file holds all the credentials, it is imported in config.


