import express from "express";

const app=express();

//var day=["Monday","Tuesday","Wednesday","Thurday","Friday","Saturday","Sunday"];

app.get("/", (req,res)=>{

    const today=new Date();
    const day=today.getDay();

    if(day>=0 & day<=3)
    {    
        res.render("index.ejs",{
            dayType: "a weekday",
            advice: "its time to work hard",
        });
    }
    else
    {
        res.render("index.ejs",{
            dayType: "a weekend",
            advice: "its time to Emjoy",
        });
    }
});

app.listen(3000,()=>{
    console.log("The server is running on port 3000");
})