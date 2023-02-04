# Hosting a Full-Stack Application
# Udagram
## currently offline
This is a Full-Stack application deployed to a cloud service (AWS) on [http://udagram-bucket-10630660.s3-website-us-east-1.amazonaws.com]
And the code deployed to git hub on [https://github.com/glavo99/nd0067-c4-deployment-process-project-starter]
The commits changes to this repository are for deployment NOT for development

## Project setup for Local run 

 clone the project - `git clone https://github.com/glavo99/nd0067-c4-deployment-process-project-starter`

* Backend

1. `cd udagram-api/` - `npm install`
2. `npx tsc`
4. create .env file with credentials that you will find in config file and don't forget to add the port of the server and the database
3. `npm run start`


* FrontEnd

1. `cd udagram-frontend/`
2. `npm install -f`
3. `npm run build`
4. `npm run start`

## Testing

This project contains two different test suite: unit tests and End-To-End tests(e2e). Follow these steps to run the tests.

1. `cd starter/udagram-frontend`
1. `npm run test`
1. `npm run e2e`

There are no Unit test on the back-end

### Unit Tests:

Unit tests are using the Jasmine Framework.

### End to End Tests:

The e2e tests are using Protractor and Jasmine.

## Built With

- [Angular](https://angular.io/) - Single Page Application Framework
- [Node](https://nodejs.org) - Javascript Runtime
- [Express](https://expressjs.com/) - Javascript API Framework

