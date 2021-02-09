// variables
const API_KEY = '';
var smt_btn=document.getElementById("smt_btn");
const temp = document.getElementById("temp")
const cityName=document.getElementById("city_name")
const tempdom=document.getElementById("tempdom")
//API feathing function ...real shit
const inputCty = document.getElementById("imputCty")
const fetcher =  async(event) => {
    event.preventDefault()
    let cityVal=inputCty.value;
    console.log("im erer")
    // console.log(limk)
    if (inputCty === "") {
        // inputCty.value = "Input your city name here";
        console.log("khali hu vro")
    }
    else {
        try {
            var limk = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=63d5dfe5b1efc5e221f85ddfdfa8716e`;
            const responsee = await fetch(limk);
            const databruh = await  responsee.json()
            const arrData = await [databruh]
            cityName.innerText=arrData[0].name;
            const fTemp=arrData[0].main.temp
            const cTemp=Math.trunc(fTemp -  273.15) +" C"
            tempdom.innerText=("Current Temprature:"+cTemp)
            console.log(arrData);
        }catch(err) {
            cityName.innerText = "Sorry we cant fetch your city detail..Pls check spelling"
            console.error(err)
        }
    }
}
smt_btn.addEventListener("click",fetcher);