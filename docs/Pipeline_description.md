# PIPELINE PROCESS

Circle CI is triggered every time you make a commit to the git hub on [https://github.com/glavo99/nd0067-c4-deployment-process-project-starter]

## Build

- orbs

Orbs are a set of instructions created by CircleCi that allow us to configure the pipeline on which we will run our actions.

1. it begins by installing node , aws-elastic-beanstalk , aws-cli

- jobs

Jobs are groups of commands that we want to run. This is where we will run commands to install, build or deploy our application.

-- build step

1. install node version 14.15 and checkout code 
2. front end install dependencies throw npm 
3. backend install dependencies throw npm
4. run lint on the front end for code review
5. front end build `ng build`
6. backend build

-- deploy step will run only after manual approval

7. install node , eb , aws cli 
8. run code to deploy both apps together frontend and backend

- workflows

Workflows are instructions about the order of the jobs. They allow us to create complex flows and specify manual approvals. Workflows are not always present in a pipeline.

we have specified that deploy will work after build and throw approval