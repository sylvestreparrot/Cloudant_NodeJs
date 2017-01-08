# Project just started so I only get the data from the database.

# Node.js Cloudant Starter Overview

The Node.js Cloudant Starter demonstrates how to use the Bluemix Cloudant NoSQL DB service. The app displays persisted files and lets the user upload new files or delete old files.

# How to install the project 
- Download any IDE (example : IntelliJ Ultimate, Eclipse)
For IntelliJ Ultimate you will need a licence. You can get one free if you are a student.

- Download NodeJs LTS (recommended for most users) available for Windows, Linux, MacOs and install it on you computer.
Node.js is an open-source, cross-platform JavaScript runtime environment for developing a diverse variety of tools and applications. Although Node.js is not a JavaScript framework,[4] many of its basic modules are written in JavaScript, and developers can write new modules in JavaScript. The runtime environment interprets JavaScript using Google's V8 JavaScript engine.

- Clone the repository on you local desktop then open it under your IDE.

Run "npm install" under the terminal directly from IntelliJ or on your working directory with Git Bash.
If there no error's messages then you can go to the next step

# Configure your Bluemix-Cloudant database
Under manyfest.yml change the following lines with your own database.

applications:
- path: .
  memory: 512M
  instances: 1
  domain: mybluemix.net
  name: Bracelet
  host: braceletproject
  disk_quota: 1024M
  services:
  - Bracelet-cloudantNoSQLDB
  
  Then under app.js change the name of your database line 21 and change the url line 72 if you want to run the app locally.
  You can find the url under bluemix
  
## Decomposition Instructions

* See app.js for how to obtain and use the Cloudant credentials as well as the file CRUD API
* See public/scripts/index.js and public/scripts/util.js for how the front-end calls the back-end API

# Or just create a Node.JS + Cloudant Boilerplate App
https://www.codeproject.com/articles/1103018/connect-to-your-cloudant-service-from-node-js-secu
But you will have to adapt your app.js file to get data from your own database because it is set to work with the database created with the app. 

# To deploy the app just follow this tutorial 
https://console.ng.bluemix.net/docs/starters/upload_app.html
