var express=require("express");
var app= express();

var path=require("path");

app.use(express.static(path.join(__dirname,"view/dist/HKallatoneplace")));

app.get("/",(req,res)=>{
    
    res.sendFile(path.join(__dirname,"view/dist/HKallatoneplace/index.html"))
});

app.listen((process.env.PORT || 8081),(req,res)=>{

    console.log("running at "+ (process.env.PORT || 8081))
})