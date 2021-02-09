//importing 
const express=require("express")
const app=express()
const path=require("path")
const hsb=require("hbs");
//other variables
const port=process.env.PORT||8000;
const static_path=path.join(__dirname,"../public")
const template_path=path.join(__dirname,"../templates/")
//routing  0u0
// fetch(`api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_KEY}`).then()
app.set("view engine","hbs")
app.set("views",template_path+"views")
hsb.registerPartials(template_path+"partials")
app.use(express.static(static_path))
app.get("",(req,res)=>{
    res.render("index")
})
app.get("/about",(req,res)=>{
res.render("about")
})
app.get("/weather",(req,res)=>{
    res.render("weather");
})
app.get("*",(req,res)=>{
res.render("404")
})
app.listen(port)