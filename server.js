//loading all frameworks
const express = require('express') //used for web applications
const path = require('path') //used for rendering web pages to client
const favicon = require('serve-favicon') //used to send tab icon to client
const morgan = require('morgan') //used to log requests made to localhost

const application = express() //used to create an application instance

application.use(morgan('dev')) //used to instantiate & define log type

//application.use(favicon(path.join(__dirname, '/static', 'favicon.png'))) //used to display tab icon if needed

let PORT = 8080 //used to define global localhost port
if(process.argv.length > 2){PORT = process.argv[2]} //checks if a port # was passed as a cmd-line arg

application.listen(PORT, () => { //implimenting a listener on localhost PORT
    console.log("localhost has begun listening to requests on:[" + PORT + "]")})

//used to route requests
application.use("/", require("./static/root/roothandler"))
//application.use("/handler", require("./static/path/to/handler")) //example of addition of new routing file
