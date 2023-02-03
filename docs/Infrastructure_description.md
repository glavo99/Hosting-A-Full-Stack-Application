# Infrastructure_description

Amazon Web Services (AWS) is the world’s most comprehensive and broadly adopted cloud platform, offering over 200 fully featured services from data centers globally.

## we used in this project 

### IAM 

to manage access to AWS resources

### EC2

virtual servers in the cloud

### S3

scalable storage in the cloud 
buckets to serve static files (front end)

### RDS

managed relational database service for storing our application database

### Elastic Beanstalk

run and manage web apps which is helpful to host our backend server

## client will access the website throw S3 bucket and the bucket fetches the data from Elastic Beanstalk which is connected to the database RDS and sometimes the application will need IAM user to gain access to write to the buckets

