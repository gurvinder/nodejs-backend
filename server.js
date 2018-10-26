//loading all frameworks
const express = require('express') //used for web applications
const path = require('path') //used for rendering web pages to client
const favicon = require('serve-favicon') //used to send tab icon to client
const morgan = require('morgan') //used to log requests made to localhost

const application = express() //used to create an application instance

application.use(morgan('dev')) //used to instantiate & define log type

application.use(favicon(path.join(__dirname, '/static', 'favicon.png'))) //used to display tab icon

const PORT = 1234 //used to define global localhost port

//implimenting a listener on localhost PORT
application.listen(PORT, () => {
  console.log("localhost has begun listening to requests on:[" + PORT + "]")})

//used to route requests
application.use("/", require("./static/path/to/router"))
application.use("/handle", require("./static/path/to/router"))