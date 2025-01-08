const express = require("express");
const route = express.Router();
const ctl = require('../Controllers/clt')
const upload = require('../Middleware/multer')

route.get("/",ctl.firstPage);
route.get("/addMovie",ctl.addMovie)
route.post("/showMovie",upload,ctl.showMovie)
route.get("/deleteMovie",upload,ctl.deleteMovie)
route.get('/editMovie',ctl.editMovie)
route.post("/updateMovie",upload,ctl.updateMovie)

module.exports=route;