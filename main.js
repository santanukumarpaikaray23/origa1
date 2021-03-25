var express = require("express");
var bodyParser = require("body-parser")
var cors = require ('cors')

var app = express();
app.use(cors())

//app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:false}))

var router = express.Router();

router.get("/",function(request,response){
    response.json({message:'This is express router message'})
})
router.get("/user",function(req,res){
    res.json({
        user:[
            {userid:1,name:"Rahul",noOfOrder:5,averageBillValue:650},
            {userid:2,name:"Ramesh",noOfOrder:3,averageBillValue:966},
            {userid:3,name:"Ankita",noOfOrder:2,averageBillValue:850},
        ]
    })
})
router.post("/user",function(req,res){
    var body = req.body
    console.log('posted data',body)
    res.json({message:body})
})

app.use("/api",router)
var PORT = 3000;

app.listen(PORT,function(){
    console.log('Server Listening at ${PORT}')
})

