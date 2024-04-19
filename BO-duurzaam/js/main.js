
//tijd-voor-sunset-sunrise
const apikey = 'your-api-key';
const url = `https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=today&formatted=0&apikey=${apikey}`;
const textsun = document.getElementById("js--text");
const url2 = "http://worldtimeapi.org/api/timezone/Europe/Amsterdam"



fetch(url)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    const sunrise = data.results.sunrise;
    const sunset = data.results.sunset;
    
    
    const sunriseEl = document.createElement('p');
    sunriseEl.textContent = `Sunrise ${sunrise}`;
    
    const sunsetEl = document.createElement('p');
    sunsetEl.textContent = `Sunset: ${sunset}`;
    
    
    let text = sunrise.substring(sunrise.lastIndexOf("T")+1,sunrise.lastIndexOf("+"));
    const textEl = document.createElement("p")
    textEl.textContent = ` ${text}`
    console.log(text)
    
    let text2 = sunset.substring(sunrise.lastIndexOf("T")+1,sunrise.lastIndexOf("+"));
    const text2El = document.createElement("p");
    text2El.textContent = ` ${text2}`
    console.log(text2)
    
    
    //document.body.appendChild(textEl);
    //document.body.appendChild(text2El);
    const widget1 = document.getElementById("js--widget--1");
const sun = document.getElementById("js--sun");
const moon = document.getElementById("js--moon")


fetch(url2)
.then(function(response){
    return response.json();
})
.then(function(data){
    const realtijd = data.datetime;
    let realtijdEL = realtijd.substring(realtijd.lastIndexOf("T")+1,realtijd.lastIndexOf("."));
    console.log(realtijdEL)



let realtime = realtijdEL;
let sunrise2 = textEl;
let sundown = text2El;

if (realtime < sunrise2){
    moon.hidden = !moon.hidden;
    widget1.style.background ="linear-gradient(109.6deg, rgb(25, 170, 209) 11.3%, rgb(21, 65, 249) 69.9%"
    textsun.innerText = text;
}else if (realtime < sundown){
    sun.hidden = !sun.hidden;
    widget1.style.background = "linear-gradient(177.9deg, rgb(58, 62, 88) 3.6%, rgb(119, 127, 148) 105.8%)"
    textsun.innerText = text2;
}
    
}) 
});


//sun/moon



//chart
const ctx = document.getElementById("myChart");
 
let data = {
    labels: ["jan-feb", "maart-april", "mei juni", "sep-okt", "nov-dec"],
    datasets:[{
        label: "KwH",
        data: [100, 80, 40, 65, 30],
        backgroundColor: [
            "rgb(30, 30, 200)",
            "rgb(0, 0, 255)",
            "rgb(120, 120, 150)",
            "rgb(70, 70, 70)",
            "rgb(200, 200, 20)"
        ],
        borderwidth: 0,
        offset: 20,
        hoverOffset: 60,
    }]
}
 
let config = {
    type: "bar",
    data: data,
    options: {
        maintainAspectRatio: false
    }
}
 
let myChart = new Chart(ctx, config)


const clip = document.querySelector('svg #clip rect');

const duration = Math.floor(Math.random() * 5 + 2) * 1000;


const translate = [
  {
    value: 'translate(0 20)',
  },
  {
    value: 'translate(0 0)',
  },
  {
    value: 'translate(0 7)',
  },
];


anime({
  targets: clip,
  transform: translate.slice(0, 2),
  duration,
  easing: 'easeOutQuad',
  
  complete: () => anime({
    targets: clip,
    transform: translate.slice(1),
    direction: 'forwards',
    
    duration: duration / 1.5,
    easing: 'easeInOutSine',
  }),
});
