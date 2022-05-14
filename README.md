## THE NOTETAKER 🖊️ 📝 💭 ##

# Description
An application that can be used to write, save and delete notes.
This application will use an Express.js back end and will save and retrieve note data from a JSON file. The front end and back end are created and the two connected. The entire application is then deployed to Heroku. 

Npm packages of Node Js and Express Js are used, as well as Local host as an API.

# Table of Contents
* Installation
* Screenshot
* Video
* Features
* Credits
* Questions
* Copyright


# Installation
- Install Node by entering 'npm i node' in the terminal.
- Install Express by entering 'npm i express' in the terminal.
- Type in 'npm start'. The following should appear:
> thenotetake@1.0.0 start

> node server.js
- To run app, click on the local host http address => App is running on http://localhost:3001

- HEROKU - To run Heroku deployment. Create Procfile:

touch Procfile

Then enter the following into the Procfile:

web: npm run start 

More notes on Heroku use of app...

# Screenshot
![alt text](https://github.com/hergemony/thenotetaker/blob/main/image/Screen%20Shot%202022-05-14%20at%204.44.46%20pm.png?raw=true)


![alt text](https://github.com/hergemony/thenotetaker/blob/main/image/Screen%20Shot%202022-05-14%20at%204.51.07%20pm.png?raw=true)


# Video
[![CLICK TO VIEW WALKTHROUGH VIDEO](https://img.youtube.com/vi/M7lc1UVf-VE/0.jpg)](https://youtu.be/N-WRRagK13M)

[![CLICK TO VIEW WALKTHROUGH VIDEO](https://www.youtube.com/embed/N-WRRagK13M)](https://youtu.be/N-WRRagK13M)


# Features
- An Index JS document
This provides the logic for the client side (front end) of the app.
- A Server JS document
This creates the entry point and routes to LocalHost
- Two HTML documents
Index.html - client landing page
Notes.html - client interactive page for saved notes
- A CSS document
Provides styles for front end
DB Folder
Contains a .JSON file that acts as a supplemental database
Package.JSON
JSON and NPM packages and dependencies

# Credits
https://stackoverflow.com 

https://w3schools.com 

https://github.com/sam-ngu 

https://www.nathan-lam.com/blog/embed-video-in-github-readme.html

# Questions
Any questions please email hergemony@gmail.com

# Copyright
2022 Hergemony™️ Digital Services