## This project is intended to enhance my skills on React.

## Dependencies that has been used
- express
- dotenv
- mongoose
- colors
- morgan

## Setting Up Your Database
- create an account in mongodb.com (start for FREE)
- SKIP the Account Setup
- create a cluster (FREE)
- select AWS as cloud provider (also provide a cluster name - optional) 
- CREATE CLUSTER and wait for 1 - 3 minutes to provision as YOUR CLUSTER IS BEING CREATED
- once the CLUSTER HAS BEEN CREATED, create your COLLECTION by clicking the COLLECTION TAB and click on ADD MY OWN DATA button
- create your database name (expensetracker) and collection name (transactions)
- go to PROJECT tab and connect your cluster
- follow the setup to successfully connect your cluster
    - add Your Current IP Address
    - create database user (this credentials will be used on setting the database connection) and the click CREATE DATABASE USER
    - choose CONNECT YOUR APPLICATION as connection method
    - copy and add/replace the MONGO_URI connection string value in config.env file

## Branches
- no-dabase (this branch has no database)
- mern (this branch has mongodb database connection)

## git checkout no-database
- this branch only have default values (values within state)
- can perform addition and subtraction of the expenses

## git checkout mern 
- created own server setup, .env variables and port 
- added mongodb as its database
